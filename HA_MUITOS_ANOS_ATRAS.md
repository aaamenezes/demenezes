Na última vez que toquei esse projeto, a ideia era a seguinte:

- Recriar o visual de todos os componentes com base num design novo feito no [V0](https://v0.dev/chat/vercel-blog-design-XrGr2vv8eAG?b=b_DUUjqlxLpuq)
- Isso seria feito testando componente a componente por dentro do Storybook
- Depois disso aplicando separadamente em cada página
- Tinha ainda alguns recursos legais como
  - light/dark mode
  - já tinha abandonado o styled components então ia fazer tudo em CSS Modules

Porém estava muito chato traduzir tudo de Tailwind para CSS Modules. Muita coisa não funcionava como esperado, o Tailwind contém algumas configurações que dificultam fazer o parse de uma estilização para outra, isso tudo foi complicando até eu não aguentar mais esse projeto. Some a isso o fato de eu começar a faculdade e não ter mais tempo para o blog.

Então a ideia pro futuro é eu começar outros projetos até que eu enjoei de tudo e volte a tocar o blog.

Esse aqui eu vou estar sendo criado em um commit WIP, mas que se um dia eu voltar a tocar esse projeto posso remover esse arquivo.

Ele também está em uma branch chamada feature/storybook, pois essa ferramenta está sendo implementada aqui.
