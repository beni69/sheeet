import { A } from "@solidjs/router";
import { useContext } from "solid-js";
import { SettingsCtx } from "~/settings";

export default function Index() {
    const settings = useContext(SettingsCtx);
    console.log({ settings });

    return (
        <main class="font-sans text-center p-4 flex justify-center items-center flex-col h-full gap-4">
            <header class="my-4">
                <svg stroke-width="0.3" stroke-dasharray="none" fill="black" stroke="black" font-family="Arial, sans-serif" font-size="10pt" font-weight="normal" font-style="normal" width="100" height="100" viewBox="0 0 100 100"><g class="vf-stave" id="vf-auto1000" stroke-width="1" fill="#999999" stroke="#999999" font-family="Arial"><path fill="none" d="M10 30L90 30"></path><path fill="none" d="M10 40L90 40"></path><path fill="none" d="M10 50L90 50"></path><path fill="none" d="M10 60L90 60"></path><path fill="none" d="M10 70L90 70"></path></g><g class="vf-stavebarline" id="vf-auto1001" font-family="Arial"><rect x="10" y="29.5" width="1" height="41" stroke="none"></rect></g><g class="vf-stavebarline" id="vf-auto1002" font-family="Arial"><rect x="90" y="29.5" width="1" height="41" stroke="none"></rect></g><g class="vf-clef" id="vf-auto1003" font-family="Arial"><path stroke="none" d="M30.191 43.208C30.135 42.731,30.191 42.703,30.444 42.45C34.824 38.378,38.138 33.24,38.138 27.034C38.138 23.524,37.155 20.042,35.498 17.627C34.881 16.729,33.842 15.606,33.392 15.606C32.831 15.606,31.567 16.644,30.781 17.543C27.776 20.856,26.794 25.911,26.794 30.123C26.794 32.454,27.102 35.093,27.383 36.75C27.468 37.227,27.496 37.311,27.018 37.733C21.178 42.534,15 48.319,15 56.49C15 63.51,19.802 70.193,29.714 70.193C30.641 70.193,31.708 70.109,32.522 69.94C32.943 69.856,33.027 69.828,33.112 70.305C33.589 73.029,34.207 76.539,34.207 78.449C34.207 84.43,30.163 85.16,27.776 85.16C25.586 85.16,24.547 84.514,24.547 83.98C24.547 83.7,24.912 83.587,25.839 83.278C27.102 82.913,28.535 81.846,28.535 79.488C28.535 77.269,27.131 75.36,24.66 75.36C21.964 75.36,20.335 77.522,20.335 80.021C20.335 82.632,21.908 86.62,28.029 86.62C30.725 86.62,35.976 85.384,35.976 78.533C35.976 76.202,35.246 72.383,34.824 69.856C34.74 69.379,34.768 69.435,35.33 69.182C39.43 67.554,42.125 64.128,42.125 59.551C42.125 54.384,38.334 49.807,32.382 49.807C31.343 49.807,31.343 49.807,31.202 49.077M34.01 21.867C35.33 21.867,36.425 22.962,36.425 25.181C36.425 29.674,32.578 33.324,29.405 36.104C29.124 36.357,28.956 36.3,28.872 35.767C28.703 34.728,28.619 33.352,28.619 32.06C28.619 25.742,31.539 21.867,34.01 21.867M29.602 49.414C29.714 50.172,29.714 50.144,28.984 50.369C25.446 51.576,23.115 54.777,23.115 58.231C23.115 61.853,25.025 64.437,27.776 65.391C28.113 65.504,28.591 65.616,28.872 65.616C29.18 65.616,29.349 65.419,29.349 65.167C29.349 64.886,29.04 64.774,28.759 64.661C27.046 63.931,25.839 62.19,25.839 60.337C25.839 58.006,27.411 56.293,29.882 55.591C30.528 55.423,30.612 55.479,30.697 55.928L32.718 67.975C32.803 68.424,32.747 68.424,32.157 68.536C31.511 68.649,30.697 68.733,29.882 68.733C22.806 68.733,18.229 64.802,18.229 59.186C18.229 56.799,18.65 53.598,21.992 49.807C24.435 47.111,26.288 45.595,28.17 44.079C28.591 43.742,28.675 43.798,28.759 44.219M32.382 55.844C32.297 55.339,32.353 55.226,32.831 55.283C36.116 55.563,38.812 58.315,38.812 61.853C38.812 64.409,37.267 66.458,35.021 67.61C34.544 67.834,34.459 67.834,34.375 67.357"></path></g><g class="vf-stavenote" id="vf-auto1004" font-family="Arial"><g class="vf-stem" id="vf-auto1005" pointer-events="bounding-box"><path stroke-width="1.5" fill="none" d="M65.309 68L65.309 35"></path></g><g class="vf-notehead" id="vf-auto1007" pointer-events="bounding-box"><path stroke="none" d="M58.056 75.054C61.651 75.054,66.059 71.741,66.059 68.315C66.059 66.237,64.431 64.946,62.128 64.946C57.691 64.946,54.125 68.231,54.125 71.685C54.125 73.791,55.866 75.054,58.056 75.054"></path></g></g></svg>
                <h1 class="text-4xl">
                    Sheeet
                </h1>

            </header>
            <div class="text-2xl min-w-32 p-2 border border-slate-400 rounded-md"><A href="/play">Play</A></div>
            <div class="text-2xl min-w-32 p-2 border border-slate-400 rounded-md w-32"><A href="/settings"><div class="inline-item mr-1 i-material-symbols-settings-rounded"></div>Settings</A></div>
        </main>
    );
}
