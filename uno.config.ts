import { defineConfig } from "unocss"
import presetUno from "@unocss/preset-uno"
import presetWebFonts from "@unocss/preset-web-fonts"
import presetIcons from "@unocss/preset-icons"
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'

export default defineConfig({
    content: {
        filesystem: [
            "**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}",
        ],
    },
    rules: [
        ["inline-item", { display: "inline list-item" }],
    ],
    presets: [
        presetUno(),
        presetIcons(),
        presetWebFonts({
            provider: "bunny",
            fonts: {
                sans: "Alegreya",
            },
            processors: createLocalFontProcessor({
                // Directory to cache the fonts
                cacheDir: "node_modules/.cache/unocss/fonts",

                // Directory to save the fonts assets
                fontAssetsDir: "public/assets/fonts",

                // Base URL to serve the fonts from the client
                fontServeBaseUrl: "/assets/fonts"
            })
        }),
    ],
})
