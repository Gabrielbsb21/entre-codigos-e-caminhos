import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import eslintPluginImport from "eslint-plugin-import";
import pluginQuery from "@tanstack/eslint-plugin-query";
import pluginPrettier from "eslint-plugin-prettier";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";
import tailwind from "eslint-plugin-tailwindcss";

const eslintConfig = defineConfig([
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "dist/**",
      "out/**",
      "coverage/**",
      "cypress/**",
      "eslint.config.mjs",
      "postcss.config.*",
      "prettier.config.*",
      "**/*.config.{js,cjs,mjs,ts}",
      "vitest.config.ts",
      "vitest.config.storybook.ts",
      ".storybook",
      "storybook-static",
    ],
  },

  js.configs.recommended,
  ...nextVitals,
  ...nextTs,
  ...tseslint.configs.recommended,
  prettier,

  pluginReact.configs.flat.recommended,

  pluginQuery.configs["flat/recommended"],

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": { typescript: true },
    },
    plugins: {
      react: pluginReact,
      "react-hooks": reactHooks,
      import: eslintPluginImport,
      prettier: pluginPrettier,
      tailwindcss: tailwind,
    },
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off",

      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      "@tanstack/query/exhaustive-deps": "warn",

      "prettier/prettier": "error",
    },
  },

  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-misused-promises": "warn",
    },
  },

  {
    files: ["**/*.{test,spec}.{ts,tsx,js,jsx}", "cypress/**"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        vi: "readonly",
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
      },
    },
    rules: {
      "import/no-extraneous-dependencies": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-misused-promises": "warn",
    },
  },
]);

export default eslintConfig;
