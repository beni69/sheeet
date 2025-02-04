import Keyboard from "~/components/Keyboard";
import Sheet from "~/components/Sheet";
import { settings } from "~/settings";

const abc = ["C", "D", "E", "F", "G", "A", "B"];

const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const randNote = () => {
    const n = random(settings.start, settings.end);
    const note = abc.at(n % abc.length)! + "/" + Math.floor(n / 12 + 4);

    const mods = Object.entries(settings.mod).map(([k, v]) => v && { none: "", sharp: "#", dim: "b" }[k] as "" | "#" | "b").filter(x => x !== false);
    const mod = mods[Math.floor(Math.random() * mods.length)]!;

    return [note, mod] as const;
};

export default function Play() {
    const [note, mod] = randNote();
    console.log({ note, mod });

    const handleClick = (n: number) => (e: Event) => {
        console.log(n, e.target);
    };

    return (
        <main class="text-center mx-auto p-4">
            <h1>Hello</h1>
            <Sheet clef={settings.clef} note={note} modifier={mod} />
            <Keyboard handler={handleClick} start={settings.start} end={settings.end} skin="piano" />
        </main>
    );
}
