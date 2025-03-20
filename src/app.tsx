import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Link, MetaProvider } from "@solidjs/meta";
import { Suspense } from "solid-js";
import { loadSettings, settings } from "./settings";
import '@unocss/reset/tailwind.css';
import "./app.css";

export default function App() {
    loadSettings();

    return (
        <MetaProvider>
            <Router
                root={props => (
                    <>
                        <Suspense>{props.children}</Suspense>
                    </>
                )}
            >
                <FileRoutes />
            </Router>

            <Link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
            <Link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <Link rel="shortcut icon" href="/favicon.ico" />
            <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <Link rel="manifest" href="/site.webmanifest" />
        </MetaProvider>
    );
}
