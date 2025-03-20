import { For, Show } from "solid-js";
import { Note } from "tonal";
import { range } from "~/settings";

export default function Keyboard(props: {
    handler: (n: number) => (e: Event) => any,
    start: number,
    end: number,
    skin: "piano" | "marimba",
    hl: { r?: number, g?: number },
    showLetters: boolean,
}) {
    const notes = [];
    for (const n of range(props.start, props.end)) {
        notes.push([n, Note.get(Note.fromMidi(n)).alt === 0])
    }
    // pad the keyboard with white keys
    notes.at(0)![1] || notes.unshift([notes.at(0)![0] - 1, true]);
    notes.at(-1)![1] || notes.push([notes.at(-1)![0] + 1, true]);

    // add letters to white notes
    notes.filter(n => n[1]).forEach(n => n.push(Note.get(Note.fromMidi(n[0])).letter));

    return (
        <ul class="keyboard">
            <For each={notes}>{([n, col, letter]) =>
                <li class={`key ${col ? "white" : "black"} ${props.hl.r === n ? "red" : ""} ${props.hl.g === n ? "green" : ""}`}
                    onClick={props.handler(n)}>
                    <Show when={props.showLetters}>
                        <span class="letter">{col && letter}</span>
                    </Show>
                </li>
            }</For>
        </ul>
    )
}
