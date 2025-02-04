import { createContext } from "solid-js";
import { createStore } from "solid-js/store";
import { Note } from "tonal";

export const [settings, setSettings] = createStore<{
    questions: number,
    timer: number,

    start: number,
    end: number,
    clef: "treble" | "bass",
    mod: { none: boolean, sharp: boolean, dim: boolean },
}>({
    questions: 20,
    timer: 120,

    start: Note.midi("A3")!,
    end: Note.midi("C5")!,
    clef: "treble",
    mod: { none: true, sharp: true, dim: true },
});

export const SettingsCtx = createContext(settings);

export const range = (start: number, stop: number, step = 1) =>
    Array(Math.ceil((stop + 1 - start) / step)).fill(start).map((x, y) => x + y * step)
