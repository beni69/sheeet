import { A } from "@solidjs/router";
import { useContext } from "solid-js";
import { SettingsCtx } from "~/settings";

export default function Index() {
    const settings = useContext(SettingsCtx);
    console.log({ settings });

    return (
        <main class="text-center mx-auto p-4">
            <h1>Hello</h1>
            <div><A href="/play">Play</A></div>
            <div><A href="/settings">Settings</A></div>
        </main>
    );
}
