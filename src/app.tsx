import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { SettingsCtx, settings } from "./settings";
import "./app.css";

export default function App() {
    return (
        <SettingsCtx.Provider value={settings}>
            <Router
                root={props => (
                    <>
                        <Suspense>{props.children}</Suspense>
                    </>
                )}
            >
                <FileRoutes />
            </Router>
        </SettingsCtx.Provider>
    );
}
