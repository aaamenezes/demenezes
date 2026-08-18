- [Ajustes de código sem impacto visual](#ajustes-de-código-sem-impacto-visual)
  - [Testar validade e risco da propriedade -webkit-tap-highlight-color](#testar-validade-e-risco-da-propriedade--webkit-tap-highlight-color)
  - [Seletor CSS de baixo desempenho](#seletor-css-de-baixo-desempenho)
  - [Analisar se `clsx` deve aceitar valor nulo](#analisar-se-clsx-deve-aceitar-valor-nulo)
  - [Analisar possível melhoria no código do Componente `table`](#analisar-possível-melhoria-no-código-do-componente-table)
  - [Melhorar `PostsWrapper`](#melhorar-postswrapper)
  - [Analisar necessidade de props key em `HandleBlock`](#analisar-necessidade-de-props-key-em-handleblock)
  - [Validar existência de className no módulo de CSS do componente](#validar-existência-de-classname-no-módulo-de-css-do-componente)
  - [Padronizar `title` e `heading`](#padronizar-title-e-heading)
- [Ajustes em componentes com pequens mudanças visuais](#ajustes-em-componentes-com-pequens-mudanças-visuais)
  - [Corrigir line-height de datas](#corrigir-line-height-de-datas)
  - [Analisar necessidade do componente PostCategory](#analisar-necessidade-do-componente-postcategory)
  - [Resolver links externos abrindo na mesma aba](#resolver-links-externos-abrindo-na-mesma-aba)
  - [Aplicar React Portal no `Navigation`](#aplicar-react-portal-no-navigation)
  - [Testar mudança de retrato para paisagem no mobile](#testar-mudança-de-retrato-para-paisagem-no-mobile)
  - [Testar site mobile](#testar-site-mobile)
- [Ajustes/criação de componentes com médias/grandes mudanças visuais](#ajustescriação-de-componentes-com-médiasgrandes-mudanças-visuais)
  - [Analisar necessidade do componente Quiz](#analisar-necessidade-do-componente-quiz)
  - [Melhorar componente input](#melhorar-componente-input)
  - [Criar novos `StructuredTextDatoCMS`](#criar-novos-structuredtextdatocms)
  - [Criar componente de grid](#criar-componente-de-grid)
  - [Criar componente de `Text`](#criar-componente-de-text)
  - [Criar componente de `Heading`](#criar-componente-de-heading)
- [Configurações estruturais](#configurações-estruturais)
  - [Implementar busca](#implementar-busca)
  - [Implementar preview](#implementar-preview)
  - [Criar regra ESLint para proibir uso do `Object.`](#criar-regra-eslint-para-proibir-uso-do-object)
  - [Resolver erro de hydration](#resolver-erro-de-hydration)
  - [Realizar atualização de versões](#realizar-atualização-de-versões)
  - [Implementar padrão composite](#implementar-padrão-composite)
  - [Aplicar SDD](#aplicar-sdd)
  - [Implementar testes](#implementar-testes)

# Ajustes de código sem impacto visual

## Testar validade e risco da propriedade -webkit-tap-highlight-color

A propriedade `-webkit-tap-highlight-color` faz com que o touch no safari mobile não tenha cor. Testar se é necessário. Verificar em Safari mobile se é necessário mesmo ou pode ser removido.

- css
- cross-browser
- acessibilidade

## Seletor CSS de baixo desempenho

Rever seletores CSS que terminam com tag html ou algo mto genérico

- css
- padrão

## Analisar se `clsx` deve aceitar valor nulo

A função `clsx` não aceita `null`, `undefined`. Ela poderia aceitar e tratar isso lá dentro. Senão, obriga a fazer `myClassName || ''` na hora de chamar o método.

Internalizar no `clsx`:

- Vantagem: facilitar o uso
- Desvantagem: arriscar esconder uma classe que não tá sendo renderizada e difícil de debugar

Deixar responsabilidade fora do `clsx`:

- Vantagem: deixar claro que uma classe pode não ser inserida
- DesvantagemÇ facilitar a invocação do método

Tem um exemplo desse uso em `src/components/ui/section/PostContent/HandleList/index.tsx`

- css
- padrão

## Analisar possível melhoria no código do Componente `table`

Hoje esse componente vem do CMS, mas preciso contatenar strings, e fica cheio de gambiarra: `/src/components/ui/block/Table/index.tsx`.

http://localhost:3000/posts/valores-absolutos-relativos-css/

Verificar se vale a pena ou não mexer nele, pelo mesmo motivo do componente quiz.

- organizar código
- componente
- cms

## Melhorar `PostsWrapper`

Esse componente hoje é dividido em `firstBlockPosts` e `secondBlockPosts` com o formulário de newsletter no meio. Além disso ele não tem story.

Analisar se vale a pena manter assim, ou se removo o componente e monto ele manualmente quando precisar.

Antes de saber o que fazer, aplicar composite na base.

- story
- component

## Analisar necessidade de props key em `HandleBlock`

Preciso das props "key" em `src/components/ui/section/PostContent/HandleBlock/index.tsx`?

- cms
- react

## Validar existência de className no módulo de CSS do componente

Tem um método isValidClassName em src/components/ui/section/PostContent/HandleHeading/index.tsx que verifica se uma classe existe no css module, para evitar erro de tipagem em códigos assim `style[customClassName]`.

Posso criar um método genérico para usar em toda code base:

```ts
function isValidClassName(
  className: string,
  styleMap: Record<string, string>
): className is keyof typeof styleMap {
  return className in styleMap;
}
```

Ou arrumar uma forma de incorporar essa lógica no clsx, para evitar de validar `isValidClassName(HeadingLevel)` em cada componente.

Por exemplo, posso criar um método auxiliar assim:

```ts
function getValidClassName(
  className: string,
  styleMap: Record<string, string>
) {
  if (className in style) return className;
  return '';
}
```

E entre os argumentos do clsx chamar o disparo desse método `clsx(style.myElement, getValidClassName(customClassName, styleMap))`. Isso exige chamar método, e achei meio ruim.

Ou posso passar uma array de duas posições no argumento de clsx `clsx(style.myElement, [customClassName, styleMap])`, mas fica confuso, não deixa claro se pode mais classes nessa array.

- css
- padrão

## Padronizar `title` e `heading`

Trocar todos os títulos por:

- `heading` quando se referir (especificamente) ao texto que identifica uma seção ou conteúdo
- `title` quando se referir (genericamente) a qualquer título (CardTitle, ModalTitle, PageTitle)

- organizar código
- padrão
- nomenclatura

# Ajustes em componentes com pequens mudanças visuais

## Corrigir line-height de datas

Corrigir line-height de data de publicação e data de atualização

- css

## Analisar necessidade do componente PostCategory

Esse componente não tem story. Não parece ser vantagem ter ele como um componente isolado, pode ser chamado e estilizado separadamente. Antes de saber o que fazer, aplicar composite na base.

- story
- component
- react
- padrão

## Resolver links externos abrindo na mesma aba

Ao final desse post http://localhost:3000/posts/map-javascript-array/#callback tem links externos, mas estão abrindo na mesma página. O conteúdo do link que o CMS tá mandando não está sendo passado pro componente Link.

- componente

## Aplicar React Portal no `Navigation`

Aguardar tarefa de atualização do next e react. Usar o react portal para o componente `Navigation` (mobile), e de busca desktop (quando houver).

- react
- componente

## Testar mudança de retrato para paisagem no mobile

Se houver problema de ajuste de tamanho de fonte quando a tela mobile muda de retrato pra paisagem, ver o `text-size-adjust:100%`

- css
- browser

## Testar site mobile

Testar scroll vertical e horizontal, zoom, etc. Se der algo errado, a culpa é do `touch-action:manipulation`

- css
- browser

# Ajustes/criação de componentes com médias/grandes mudanças visuais

## Analisar necessidade do componente Quiz

Analisar a viabilidade de manter esse componente na base:

- Não vou postar mais
- Acho que nunca usei (confirmar isso)
- Vou passar o blog pra site pessoal
- Rever todo CSS e font style dele

- css
- componente

## Melhorar componente input

Alterações:

- Colocar o componente label obrigatório lá dentro
- Pedir name e id como obrigatório (para usar no htmlFor do label)

- organizar código
- componente

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

## Criar componente de `Text`

Criar componente de <Text></Text> e colocar no lugar de todos p, strong, span, h1h2h3h4h5h6, etc

- padrão
- componente

## Criar componente de `Heading`


Criar componente de <Heading></Heading> e colocar no lugar de todos h1h2h3h4h5h6, etc

- padrão
- componente

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

Erro de hydration http://localhost:3000/posts/como-usar-foreach-javascript-exemplos/

- react
- next

## Realizar atualização de versões

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
