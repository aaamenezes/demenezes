- [Ajustes de código sem impacto visual](#ajustes-de-código-sem-impacto-visual)
  - [\[🚫 COMPOSITE\] Melhorar `PostsWrapper`](#-composite-melhorar-postswrapper)
- [Ajustes em componentes com pequens mudanças visuais](#ajustes-em-componentes-com-pequens-mudanças-visuais)
  - [Testar mudança de retrato para paisagem no mobile](#testar-mudança-de-retrato-para-paisagem-no-mobile)
  - [Testar site mobile](#testar-site-mobile)
  - [\[🚫 COMPOSITE\] Analisar necessidade do componente PostCategory](#-composite-analisar-necessidade-do-componente-postcategory)
  - [\[🚫 ATUALIZAR VERSOES\] Aplicar React Portal no `Navigation`](#-atualizar-versoes-aplicar-react-portal-no-navigation)
- [Ajustes/criação de componentes com médias/grandes mudanças visuais](#ajustescriação-de-componentes-com-médiasgrandes-mudanças-visuais)
  - [Criar novos `StructuredTextDatoCMS`](#criar-novos-structuredtextdatocms)
  - [Criar componente de grid](#criar-componente-de-grid)
- [Configurações estruturais](#configurações-estruturais)
  - [Implementar busca](#implementar-busca)
  - [Implementar preview](#implementar-preview)
  - [Criar regra ESLint para proibir uso do `Object.`](#criar-regra-eslint-para-proibir-uso-do-object)
  - [Resolver erro de hydration](#resolver-erro-de-hydration)
  - [Atualizar versões](#atualizar-versões)
  - [Implementar padrão composite](#implementar-padrão-composite)
  - [Aplicar SDD](#aplicar-sdd)
  - [Implementar testes](#implementar-testes)

# Ajustes de código sem impacto visual

## [🚫 COMPOSITE] Melhorar `PostsWrapper`

Esse componente hoje é dividido em `firstBlockPosts` e `secondBlockPosts` com o formulário de newsletter no meio. Além disso ele não tem story.

Analisar se vale a pena manter assim, ou se removo o componente e monto ele manualmente quando precisar.

Antes de saber o que fazer, aplicar composite na base.

- story
- component

# Ajustes em componentes com pequens mudanças visuais

## Testar mudança de retrato para paisagem no mobile

Se houver problema de ajuste de tamanho de fonte quando a tela mobile muda de retrato pra paisagem, ver o `text-size-adjust:100%`

- css
- browser

## Testar site mobile

Testar scroll vertical e horizontal, zoom, etc. Se der algo errado, a culpa é do `touch-action:manipulation`

- css
- browser

## [🚫 COMPOSITE] Analisar necessidade do componente PostCategory

Esse componente não tem story. Não parece ser vantagem ter ele como um componente isolado, pode ser chamado e estilizado separadamente. Antes de saber o que fazer, aplicar composite na base.

- story
- component
- react
- padrão

## [🚫 ATUALIZAR VERSOES] Aplicar React Portal no `Navigation`

Aguardar tarefa de atualização do next e react. Usar o react portal para o componente `Navigation` (mobile), e de busca desktop (quando houver).

- react
- componente

# Ajustes/criação de componentes com médias/grandes mudanças visuais

## Criar novos `StructuredTextDatoCMS`

Esse componente renderiza conteúdo vindo do CMS. Já existe o principal, que renderiza o conteúdo do post.

Para evitar importação cíclica, criar mais 2:

- Um para o conteúdo do `TextBox`, que geralmente contém apenas textos e títulos
- E outro para o `BlockQuote`, que geralmente tem apenas um parágrafo

- cms
- componente

## Criar componente de grid

O `RelatedPosts` usa um grid para exibir posts relacionados, e renderiza `PostCard` dentro.

- Criar o componente de grid
- Aplicar no `RelatedPosts`
- Aplicar também em `src/components/ui/block/PostCard/story.tsx`
- Se certificar que removi o style inline em `src/components/ui/block/PostCard/story.tsx`

- componente
- padrão

# Configurações estruturais

## Implementar busca

Hoje o blog não tem uma forma de busca nos conteúdos. Existe o componente SearchWrapper, que está oculto. Além disso ele não tem story.

- story
- component

## Implementar preview

Implementar código de preview do blog, para analisar como está renderizando posts que estão em rascunho no CMS.

- cms
- react
- next

## Criar regra ESLint para proibir uso do `Object.`

Criar regra no ESLint para não usar Object.keys, Object.values e Object.entries. Em vez disso usar keysOf, valuesOf e entriesOf, métodos presente em `src/utils/object.ts`. Eles retornam o objeto com seus devidos tipos

- eslint
- padrão

## Resolver erro de hydration

Erro de hydration

- http://localhost:3000/posts/como-usar-foreach-javascript-exemplos/
- http://localhost:3000/posts/imagem-quadrada-redonda-css/

- react
- next

## Atualizar versões

Atualizar next pro 15, react pro 19, e depois react-dom pro 19.

- next
- react
- react-dom
- react-portal
- component

## Implementar padrão composite

Implementar padrão composite nos componentes

- react
- componente
- padrão

## Aplicar SDD

## Implementar testes

Verificar tipos de testes necessários.

- padrão
- teste
