import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jest from "eslint-plugin-jest"


export default [
  // Для JS
  {
    files: ['**/*.{js,mjs,cjs}'],
    ...js.configs.recommended,
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      semi: ['error', 'always'],
    },
  },
  // Тесты
  {
    files: ['**/*.test.js'],
    ...jestPlugin.configs['flat/recommended'],
  },
];