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
            </div>
            <div class="mt-6 flex space-x-4">
                <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
                    Save Settings
                </button>
                <A href="/" class="border border-slate-500 p-3 rounded-md">Back</A>
            </div>
        </form>
    )

    // return (


    // <>
    //     <main class="flex justify-center mt-8">
    //         <table class="min-w-fit bg-white border border-slate-300 rounded-lg shadow-md">
    //             <thead>
    //                 <tr class="bg-slate-200 text-slate-700">
    //                     <th class="py-2 px-4 border-b">Name</th>
    //                     <th class="py-2 px-4 border-b"></th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 <tr class="hover:bg-slate-100">
    //                     <td class="py-2 px-4 border-b">ABC</td>
    //                     <td class="py-2 px-4 border-b">ABC</td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //
    //     </main>
    //     <div class="flex justify-center mt-8 gap-4">
    //         <A href="/" class="border border-slate-500 p-3 rounded-md">Back</A>
    //     </div>
    // </>

    // <main class="text-center mx-auto p-4">
    //     <h1>Settings</h1>
    //     <p><A href="/">Back</A></p>
    //     <h2>Game</h2>
    //     <label>Questions:
    //         <input type="number" value={settings.questions} onChange={handleQuestions} />
    //     </label>
    //
    //     <label>Timer:
    //         <input type="number" value={settings.timer} onChange={handleTimer} />
    //     </label>
    //
    //     <h2>Sheet</h2>
    //     <label>Clef
    //         <select value={settings.clef} onChange={handleClef}>
    //             <option value="treble">Treble</option>
    //             <option value="bass">Bass</option>
    //         </select>
    //     </label>
    //
    //     <label>Start
    //         <input type="number" value={settings.start} onChange={handleStart} />
    //     </label>
    //
    //     <label>End
    //         <input type="number" value={settings.end} onChange={handleEnd} />
    //     </label>
    // </main>
    // );
}
