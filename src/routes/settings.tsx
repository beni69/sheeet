import { A } from "@solidjs/router";
import { settings, setSettings } from "~/settings";

export default function Settings() {
    const handleSubmit = (_e: Event) => {
        _e.preventDefault();
        const form = document.querySelector("form#settings") as HTMLFormElement;
        const data = Object.fromEntries(new FormData(form));
        const s = {
            ...settings, ...data,
            questions: parseInt(data.questions),
            timer: parseInt(data.timer),
            start: parseInt(data.start),
            end: parseInt(data.end),
            letters: form.letters.checked,
        };
        setSettings(s);
    };

    return (
        <form id="settings" onSubmit={handleSubmit} class="font-sans max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h1 class="text-2xl mb-6">Settings</h1>
            <div class="grid grid-cols-2 gap-4">
                <label for="questions" class="font-medium">Questions</label>
                <input type="number" name="questions" value={settings.questions} />

                <label for="timer" class="font-medium">Timer</label>
                <input type="number" name="timer" value={settings.timer} />

                <label for="start" class="font-medium">Start</label>
                <input type="number" name="start" value={settings.start} />

                <label for="end" class="font-medium">End</label>
                <input type="number" name="end" value={settings.end} />

                <label for="clef" class="font-medium">Clef</label>
                <select name="clef" value={settings.clef}>
                    <option value="treble">Treble</option>
                    <option value="bass">Bass</option>
                </select>

                <label for="letters" class="font-medium">Display letters</label>
                <input type="checkbox" name="letters" checked={settings.letters} />
            </div>
            <div class="mt-6 flex space-x-4">
                <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
                    Save Settings
                </button>
                <A href="/" class="border border-slate-500 p-3 rounded-md">Back</A>
            </div>
        </form>
    )
}
