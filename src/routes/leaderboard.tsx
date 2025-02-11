import { A } from "@solidjs/router";
import { createSignal, For } from "solid-js";
import { clearScores, fmtTimer, listScores } from "~/db";

export default function Leaderboard() {
    const [lb, setLb] = createSignal(listScores());
    return (
        <>
            <main class="flex justify-center mt-8">
                <table class="min-w-fit bg-white border border-slate-300 rounded-lg shadow-md">
                    <thead>
                        <tr class="bg-slate-200 text-slate-700">
                            <th class="py-2 px-4 border-b">Name</th>
                            <th class="py-2 px-4 border-b">Score</th>
                            <th class="py-2 px-4 border-b">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <For each={lb()}>{lb =>
                            <tr class="hover:bg-slate-100">
                                <td class="py-2 px-4 border-b">{lb.name}</td>
                                <td class="py-2 px-4 border-b">{lb.score}</td>
                                <td class="py-2 px-4 border-b">{fmtTimer(lb.time)}</td>
                            </tr>
                        }</For>
                    </tbody>
                </table>

            </main>
            <div class="flex justify-center mt-8 gap-4">
                <A href="/" class="border border-slate-500 p-3 rounded-md">Back</A>
                <button onClick={() => confirm("Are you sure?") && clearScores() || setLb(listScores())}
                    class="border border-red-500 text-red-500 p-3 rounded-md">Reset</button>
            </div>
        </>
    );
}
