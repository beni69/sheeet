/*
 * Keyboard numbering scheme:
 * 0  => C4
 * 1  => C#4
 * 2  => D4
 * 12 => C5 (C')
 * -1 => B3 (B,)

|  | | | | | |  |  | | | |  |  | | | | | |  |  | | | |  |
|  | | | | | |  |  | | | |  |  | | | | | |  |  | | | |  |
|  | | | | | |  |  | | | |  |  | | | | | |  |  | | | |  |
|  |_| |_| |_|  |  |_| |_|  |  |_| |_| |_|  |  |_| |_|  |
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |
| F,| G,| A,| B,| C | D | E | F | G | A | B | C'| D'| E'|
|___|___|___|___|___|___|___|___|___|___|___|___|___|___|

 */

import { For } from "solid-js";
import { settings } from "~/settings";

// const abc = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
//
// const abcBlack = abc.map(x => x.includes("#"));
//
// export const noteFromNum = (n: number) => {
//     return abc.at(n % abc.length)! + Math.floor(n / 12 + 4);
// };
//
// export const noteToBass = (n: number) => n - 9;


const skipBlack = [-5, -1, 2, 6]; // after E and B

const range = (start: number, stop: number, step = 1) =>
    Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)


export default function Keyboard(props: {
    handler: (n: number) => (e: Event) => any,
    start: number,
    end: number,
    skin: "piano" | "marimba",
}) {

    const notes = [];
    // let noteI =
    for (const n of range(props.start, props.end)) {
        notes.push([n, true])
        if (!skipBlack.includes(n % 7)) notes.push([n, false]);
    }

    console.log({ notes });
    return (
        <ul class="keyboard">
            <For each={notes}>{([n, col]) =>
                // <li class={`key ${abcBlack.at(n % abc.length) ? "black" : "white"}`}></li>
                <li class={`key ${col ? "white" : "black"}`} onClick={props.handler(n)}></li>
            }</For>
        </ul>
    )
}
