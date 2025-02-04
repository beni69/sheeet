import { A } from "@solidjs/router";
import { settings, setSettings } from "~/settings";

export default function Settings() {

    const handleQuestions = (e) => setSettings("questions", e.target.value);
    const handleTimer = (e) => setSettings("timer", e.target.value);
    const handleClef = (e) => setSettings("clef", e.target.value);
    const handleStart = (e) => setSettings("start", e.target.value);
    const handleEnd = (e) => setSettings("end", e.target.value);

    return (
        <main class="text-center mx-auto p-4">
            <h1>Settings</h1>
            <p><A href="/">Back</A></p>
            <h2>Game</h2>
            <label>Questions:
                <input type="number" value={settings.questions} onChange={handleQuestions} />
            </label>

            <label>Timer:
                <input type="number" value={settings.timer} onChange={handleTimer} />
            </label>

            <h2>Sheet</h2>
            <label>Clef
                <select value={settings.clef} onChange={handleClef}>
                    <option value="treble">Treble</option>
                    <option value="bass">Bass</option>
                </select>
            </label>

            <label>Start
                <input type="number" value={settings.start} onChange={handleStart} />
            </label>

            <label>End
                <input type="number" value={settings.end} onChange={handleEnd} />
            </label>
        </main>
    );
}
