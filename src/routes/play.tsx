import { createEffect, createSignal, Match, Switch } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { Note } from "tonal";
import Keyboard from "~/components/Keyboard";
import Sheet from "~/components/Sheet";
import { range, settings } from "~/settings";
import { fmtTimer, saveScore } from "~/db";

const addAccent = (n: Note.NoteType, x: string) =>
    Note.get(`${n.letter}${x}${n.oct}`);

const randNote = (start: number, end: number, _mod: typeof settings.mod) => {
    const dict = range(start, end)
        .map(x => Note.get(Note.fromMidi(x)))
        .filter(n => n.alt === 0); // get the whole notes in range
    const key = dict[Math.floor(Math.random() * dict.length)]

    const mods = Object.entries(_mod)
        .map(([k, v]) => v && { none: "", sharp: "#", dim: "b" }[k])
        .filter(x => x !== false);
    const mod = mods[Math.floor(Math.random() * mods.length)]!;

    const note = addAccent(key, mod);

    if (note.midi === null) {
        console.error("invalid note", { note, key, mod, settings: { start, end, _mod } });
        return randNote(start, end, _mod);
    }

    // modifier put the note out of range
    if (note.midi < start || note.midi > end)
        return randNote(start, end, _mod);

    return note;
};

export default function Play() {
    const navigate = useNavigate();

    const [round, setRound] = createSignal(0);
    const [score, setScore] = createSignal(0);

    const [note, setNote] = createSignal<Note.NoteType>(0 as never);
    const [hl, setHl] = createSignal({});

    const started = Date.now();
    const [timer, setTimer] = createSignal(settings.timer);

    const [waiting, setWaiting] = createSignal(false);

    setInterval(() => {
        const elapsed = Math.ceil((Date.now() - started) / 1000);

        if (round() > settings.questions || settings.timer - elapsed < 0) return;

        setTimer(settings.timer - elapsed);
    }, 100);

    const nextRound = () => {
        setWaiting(false);
        setHl({});
        setRound(round() + 1);

        if (round() > settings.questions) return;

        const _note = randNote(settings.start, settings.end, settings.mod);
        setNote(_note);
    };

    const handleClick = (n: number) => (_e: Event) => {
        if (waiting()) return;
        if (note().midi === n) {
            setScore(score() + 1);
            setHl({ g: n })
        } else {
            setHl({ r: n, g: note().midi })
        }
        setWaiting(true);
        setTimeout(nextRound, 1000);
    };

    const handleSubmit = (_e: Event) => {
        _e.preventDefault();
        const name = (document.getElementById("lb-name") as HTMLInputElement).value;
        saveScore({ name, score: score(), time: settings.timer - timer() });
        navigate("/leaderboard");
    };

    nextRound();

    createEffect(() => {
        console.log(note().name);
    })

    return (
        <main class="text-center p-4 h-full flex justify-center items-center flex-col gap-6">
            <Switch>
                <Match when={round() <= settings.questions && timer() > 0}>
                    <h1>Score: {score()} - {round()}/{settings.questions} - {fmtTimer(timer())}</h1>
                    <Sheet clef={settings.clef} note={`${note().letter}/${note().oct}`} modifier={note().acc as any} />
                    <Keyboard handler={handleClick} start={settings.start} end={settings.end} skin="piano" hl={hl()} />
                </Match>

                <Match when={round() > settings.questions || timer() <= 0}>
                    <h1>Score: {score()}/{settings.questions} - {fmtTimer(settings.timer - timer())}</h1>
                    <form onSubmit={handleSubmit} class="flex items-center">
                        <input id="lb-name" class="p-2 m-1 border border-slate-400 rounded-md" type="text" />
                        <button class="p-2 m-1 border border-slate-400 rounded-md"><div class="i-material-symbols-arrow-forward-rounded"></div></button>
                    </form>
                </Match>
            </Switch>
        </main>
    );
}
