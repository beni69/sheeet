import { For } from "solid-js";
import { Note } from "tonal";
import { range } from "~/settings";

export default function Keyboard(props: {
    handler: (n: number) => (e: Event) => any,
    start: number,
    end: number,
    skin: "piano" | "marimba",
    hl: { r?: number, g?: number },
}) {
    const notes = [];
    for (const n of range(props.start, props.end)) {
        notes.push([n, Note.get(Note.fromMidi(n)).alt === 0])
    }
    // pad the keyboard with white keys
    notes.at(0)![1] || notes.unshift([notes.at(0)![0] - 1, true]);
    notes.at(-1)![1] || notes.push([notes.at(-1)![0] + 1, true]);

    return (
        <ul class="keyboard">
            <For each={notes}>{([n, col]) =>
                <li class={`key ${col ? "white" : "black"} ${props.hl.r === n ? "red" : ""} ${props.hl.g === n ? "green" : ""}`}
                    onClick={props.handler(n)}></li>
            }</For>
        </ul>
    )
}
