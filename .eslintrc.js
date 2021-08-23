module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    // Permitir JSX tanto em arquivos .js quanto em .jsx
    'react/jsx-filename-extension': [ 1, { extensions: [ '.js', '.jsx' ] } ],
    // Não permitir uso de var, converter para let
    'no-var': 'error',
    // Não inserir ponto e vírgula no fim da sentença
    semi: [ 'error', 'never', { beforeStatementContinuationChars: 'never' } ],
    // Não inserir vírgula após último elemento de arrays e objetos
    'comma-dangle': [ 'error', 'never' ],
    // Identação com dois espaços
    indent: [ 'error', 2 ],
    // Permitir tabs para identação
    'no-tabs': [ 'error', { allowIndentationTabs: true } ],
    // Preferir apóstrofo a aspas
    'jsx-quotes': [ 'error', 'prefer-single' ],
    // Permitir export não default também
    'import/prefer-default-export': 'off',
    // Exigir espaço dentro de array: [ count, setCount ]
    'array-bracket-spacing': [ 'error', 'always' ],
    // Exigir espaço dentro de objeto: { 1, 2, 3 }
    'template-curly-spacing': [ 'error', 'always' ],
    // Não exigir quebra de linha ou linha única para objetos (livre)
    'object-curly-newline': [ 'error', { consistent: true } ],
    // Arrow functions com um parâmetro não devem usar parênteses
    'arrow-parens': [ 'error', 'as-needed' ],
    // Máximo de 80 caracteres por linha
    'max-len': [ 'error', { code: 80 } ],
    // Não ter espaço entre o nome da função e os parênteses
    'no-spaced-func': 'error',
    // Permitir spread operator
    'react/jsx-props-no-spreading': 'off',
    // Label não se contenta com 'htmlFor' e exige 'for' que é palavra reservada
    'jsx-a11y/label-has-associated-control': [ 'error', { assert: 'either' } ],
    // Permitir operação unária
    'no-plusplus': 'off',
    // Permitir inserção de HTML externo no React por causa do DatoCMS
    'react/no-danger': 'off',
    // Ignorar propTypes
    'react/prop-types': [ 0 ],
    // Não exigir parênteses em if ternário
    'no-confusing-arrow': 'off'
  }
}
