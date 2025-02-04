import { createEffect, createSignal, Match, Switch } from "solid-js";
import { Note } from "tonal";
import Keyboard from "~/components/Keyboard";
import Sheet from "~/components/Sheet";
import { range, settings } from "~/settings";

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
    const [round, setRound] = createSignal(0);
    const [score, setScore] = createSignal(0);

    const [note, setNote] = createSignal<Note.NoteType>(0 as never);
    const [hl, setHl] = createSignal({});
    const started = Date.now(); // TODO: impl timer

    const nextRound = () => {
        setHl({});
        setRound(round() + 1);

        if (round() > settings.questions) return;

        const _note = randNote(settings.start, settings.end, settings.mod);
        setNote(_note);
    };

    const handleClick = (n: number) => (e: Event) => {
        if (note().midi === n) {
            setScore(score() + 1);
            setHl({ g: n })
        } else {
            setHl({ r: n, g: note().midi })
        }
        setTimeout(nextRound, 1000);
    };

    nextRound();

    createEffect(() => {
        console.log(note().name);
    })

    return (
        <main class="text-center mx-auto p-4">
            <Switch>
                <Match when={round() <= settings.questions}>
                    <h1>Score: {score()} - {round()}/{settings.questions}</h1>
                    <Sheet clef={settings.clef} note={`${note().letter}/${note().oct}`} modifier={note().acc as any} />
                    <Keyboard handler={handleClick} start={settings.start} end={settings.end} skin="piano" hl={hl()} />

                </Match>
                <Match when={round() > settings.questions}>
                    <h1>Score: {score()}/{settings.questions}</h1>
                </Match>
            </Switch>
        </main>
    );
}
