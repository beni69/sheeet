import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Link, MetaProvider } from "@solidjs/meta";
import { Suspense } from "solid-js";
import { SettingsCtx, settings } from "./settings";
import '@unocss/reset/tailwind-compat.css';
import "./app.css";

export default function App() {
    return (
        <MetaProvider>
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

            <Link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
            <Link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <Link rel="shortcut icon" href="/favicon.ico" />
            <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <Link rel="manifest" href="/site.webmanifest" />
        </MetaProvider>
    );
}
