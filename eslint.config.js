import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'
export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
        plugins: { js, prettier: prettierPlugin },
        extends: ['js/recommended'],

        rules: {
            'prettier/prettier': 'error' // 让 Prettier 规则作为 ESLint 错误出现
        }
    },
    { files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'], languageOptions: { globals: globals.browser } },

    tseslint.configs.recommended,

    pluginVue.configs['flat/essential'],

    eslintConfigPrettier,
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
        rules: {
            quotes: ['error', 'single']
        }
    },
    { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },

    { ignores: ['node_modules', 'dist', 'build'] }
])
