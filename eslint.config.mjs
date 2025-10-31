import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config([
  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    settings: { react: { version: "detect" } },
    rules: {
      // Permitir JSX tanto em arquivos .js quanto em .jsx
      'react/jsx-filename-extension': [
        1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
      ],
      // Não permitir uso de var, converter para let
      'no-var': 'error',
      // Permitir tabs para identação
      'no-tabs': ['error', { allowIndentationTabs: true }],
      // Permitir export não default também
      'import/prefer-default-export': 'off',
      // Não exigir quebra de linha ou linha única para objetos (livre)
      'object-curly-newline': ['error', { consistent: true }],
      // Não ter espaço entre o nome da função e os parênteses
      'no-spaced-func': 'error',
      // Permitir operação unária
      'no-plusplus': 'off',
      // Permitir inserção de HTML externo no React por causa do DatoCMS
      'react/no-danger': 'off',
      // Não exigir parênteses em if ternário
      'no-confusing-arrow': 'off',
      // Permitir underline antes de nome de variável
      'no-underscore-dangle': 'off',
      // Permite aninhar if ternário
      'no-nested-ternary': 'off',
      // Não permitir variáveis não utilizadas
      'no-unused-vars': 'error',
      // Não exigir importação do React em arquivos com JSX
      'react/react-in-jsx-scope': 'off',
      // Não exigir prop types
      'react/prop-types': 'off',
      // Exigir palavra type nos imports de tipos
      "@typescript-eslint/consistent-type-imports": "error",
      // Exigir palavra type nos exports de tipos
      "@typescript-eslint/consistent-type-exports": "error",
    }
  },
]);
