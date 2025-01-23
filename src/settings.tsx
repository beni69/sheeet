import { createContext } from "solid-js";
import { createStore } from "solid-js/store";

export const [settings, setSettings] = createStore<{
    game: {
        questions: number,
        timer: number,
    },
    sheet: {
        clef: "treble" | "bass",
        ext: number,
    },
}>({
    game: {
        questions: 20,
        timer: 120,
    },
    sheet: {
        clef: "treble",
        ext: 1,
    }
});

export const SettingsCtx = createContext(settings);

