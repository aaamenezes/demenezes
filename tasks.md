- [Ajustes de código sem impacto visual](#ajustes-de-código-sem-impacto-visual)
  - [\[🚫 COMPOSITE\] Melhorar `PostsWrapper`](#-composite-melhorar-postswrapper)
  - [\[🚫 COMPOSITE\] Analisar necessidade do componente PostCategory](#-composite-analisar-necessidade-do-componente-postcategory)
  - [\[🚫 ATUALIZAR VERSOES\] Aplicar React Portal no `Navigation`](#-atualizar-versoes-aplicar-react-portal-no-navigation)
  - [\[🚫 DEPLOY\] Testar mudança de retrato para paisagem no mobile](#-deploy-testar-mudança-de-retrato-para-paisagem-no-mobile)
  - [\[🚫 DEPLOY\] Testar site mobile](#-deploy-testar-site-mobile)
- [Configurações estruturais](#configurações-estruturais)
  - [Criar regra ESLint para proibir uso do `Object.`](#criar-regra-eslint-para-proibir-uso-do-object)
  - [Resolver erro de hydration](#resolver-erro-de-hydration)
  - [Implementar padrão composite](#implementar-padrão-composite)
  - [Reorganizar componentes](#reorganizar-componentes)
  - [Revisar /src/](#revisar-src)
- [Atualizar versões](#atualizar-versões)
  - [Aplicar SDD](#aplicar-sdd)
  - [Implementar busca](#implementar-busca)
  - [Implementar preview](#implementar-preview)
  - [Implementar testes](#implementar-testes)
- [Próximos projetos](#próximos-projetos)
  - [Idade do Gato](#idade-do-gato)
  - [My Splitwise](#my-splitwise)

# Ajustes de código sem impacto visual

## [🚫 COMPOSITE] Melhorar `PostsWrapper`

Esse componente hoje é dividido em `firstBlockPosts` e `secondBlockPosts` com o formulário de newsletter no meio. Além disso ele não tem story.

Analisar se vale a pena manter assim, ou se removo o componente e monto ele manualmente quando precisar.

Antes de saber o que fazer, aplicar composite na base.

- story
- component

## [🚫 COMPOSITE] Analisar necessidade do componente PostCategory

Esse componente não tem story. Não parece ser vantagem ter ele como um componente isolado, pode ser chamado e estilizado separadamente. Antes de saber o que fazer, aplicar composite na base.

- story
- component
- react
- padrão

## [🚫 ATUALIZAR VERSOES] Aplicar React Portal no `Navigation`

Usar o react portal para o componente `Navigation` (mobile), e de busca desktop (quando houver).

- react
- componente

## [🚫 DEPLOY] Testar mudança de retrato para paisagem no mobile

Se houver problema de ajuste de tamanho de fonte quando a tela mobile muda de retrato pra paisagem, ver o `text-size-adjust:100%`

- css
- browser

## [🚫 DEPLOY] Testar site mobile

Testar scroll vertical e horizontal, zoom, etc. Se der algo errado, a culpa é do `touch-action:manipulation`

- css
- browser

# Configurações estruturais

## Criar regra ESLint para proibir uso do `Object.`

Criar regra no ESLint para não usar Object.keys, Object.values e Object.entries. Em vez disso usar keysOf, valuesOf e entriesOf, métodos presente em `src/utils/object.ts`. Eles retornam o objeto com seus devidos tipos.

- eslint
- padrão

## Resolver erro de hydration

Erro de hydration

- http://localhost:3000/posts/como-usar-foreach-javascript-exemplos/
- http://localhost:3000/posts/imagem-quadrada-redonda-css/

- react
- next

## Implementar padrão composite

Implementar padrão composite nos componentes

- react
- componente
- padrão

## Reorganizar componentes

- Mover componentes de `src/designSystems` para `src/ui`
- Mover componentes de `src/meta` para `src/`
- Mover componentes de `src/post` para `src/ui`
- Mover componentes de `src/ui` para `src/` e remover `src/ui`

## Revisar /src/

Rever as pastas dentro de `/src/`, se nomes fazem sentido, se a organização faz sentido.

# Atualizar versões

Atualizar next pro 15, react pro 19, e depois react-dom pro 19.

- next
- react
- react-dom
- react-portal
- component

## Aplicar SDD

## Implementar busca

Hoje o blog não tem uma forma de busca nos conteúdos. Existe o componente SearchWrapper, que está oculto. Além disso ele não tem story.

- story
- component

## Implementar preview

Implementar código de preview do blog, para analisar como está renderizando posts que estão em rascunho no CMS.

- cms
- react
- next

## Implementar testes

Verificar tipos de testes necessários.

- padrão
- teste

# Próximos projetos

## Idade do Gato

## My Splitwise
