import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
// import analyze from "rollup-plugin-analyzer";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import ckeditor5 from "@ckeditor/vite-plugin-ckeditor5";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

export default defineConfig({
    envDir: "./resources/js/environments",
    plugins: [
        vue(),
        laravel({
            input: ["resources/css/app.css", "resources/js/main.ts"],
            refresh: true,
        }),
        ckeditor5({
            theme: require.resolve("@ckeditor/ckeditor5-theme-lark"),
        }),
        VueI18nPlugin({
            // include: path.resolve(__dirname, "./resources/js/data/locales/**"),
            jitCompilation: true,
        }),
        //splitVendorChunkPlugin(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./resources/js"),
            "@components": path.resolve(
                __dirname,
                "./resources/js/components/",
            ),
            "vue-i18n": "vue-i18n/dist/vue-i18n.esm-bundler.js",
        },
    },
    build: {
        target: "es2022",
        rollupOptions: {
            // plugins: [analyze({ summaryOnly: true })],
            output: {
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        return id
                            .toString()
                            .split("node_modules/")[1]
                            .split("/")[0]
                            .toString();
                    }
                },
            },
        },
    },
    define: {
        // __VUE_OPTIONS_API__: false,
        __VUE_I18N_FULL_INSTALL__: true,
        __VUE_I18N_LEGACY_API__: false,
        __INTLIFY_PROD_DEVTOOLS__: false,
        // global: "window",
    },
});
