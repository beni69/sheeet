import { createContext } from "solid-js";
import { createStore } from "solid-js/store";

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

    start: -2,
    end: 14,
    clef: "treble",
    mod: { none: true, sharp: true, dim: true },
});

export const SettingsCtx = createContext(settings);

