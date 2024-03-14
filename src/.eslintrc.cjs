const path = require("node:path");

module.exports = {
    root: true,
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: false,
        },
    },
    extends: [
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:tailwindcss/recommended",
        "prettier",
    ],
    settings: {
        tailwindcss: {
            config: path.join(__dirname, "./tailwind.config.js"),
        },
    },
    rules: {
        // override/add rules settings here, such as:
        "prefer-const": "error",
        "vue/multi-word-component-names": "off",
        "vue/no-v-html": "off",
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "tailwindcss/no-custom-classname": [
            "warn",
            {
                config: path.join(__dirname, "./tailwind.config.js"),
                cssFiles: [path.join(__dirname, "./resources/css/app.css")],
            },
        ],
        //"@typescript-eslint/no-non-null-assertion": "error",
    },
};
