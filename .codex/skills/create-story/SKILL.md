name: create-story
description: Cria um arquivo `story.tsx` para um componente existente, seguindo o padrão do projeto, sem modificar o componente original.

---

# Objetivo

Criar um arquivo `story.tsx` para um componente existente, seguindo exatamente o padrão já adotado no projeto.

Essa skill nunca altera o componente original.

# Pré-requisitos

- O usuário informou o nome do componente no prompt
- O componente informado existe
- O nome do componente é claro e objetivo, ou seja, não há dúvidas sobre qual componente o usuário se refere
- O componente não possui arquivo `story.tsx` em seu diretório

Caso algum desses requisitos não seja atendido, interrompa, não execute ou crie nada, e informa o erro ao usuário.

# Fluxo

1. Verifique se o usuário informou o nome do componente
2. Caso não tenha informado, interrompa
3. Localize o componente no repositório
4. Caso não exista ou existe mais de um que se encaixe, interrompa
5. Verifique se já existe `story.tsx`
6. Caso exista, interrompa e recomende a skill **Update Story**
7. Analise o padrão predominante de stories
8. Monte um plano
9. Aguarde aprovação
10. Após aprovação, implemente

# Restrições

Os únicos arquivos que podem ser alterados são:

- <componente>/story.tsx
- src/components/ui/template/Components/data.ts

# Proibições

- Alterar o componente
- Alterar seus types
- Alterar arquivos além dos citados no capítulo **Restrições**
- Corrigir bugs encontrados
- Refatorar código
- Alterar estilos

# Critérios de qualidade

## Plano

O plano deve conter:

- Componente encontrado, nome, path e uma breve descrição
- Exemplos que serão criados
- Arquivos que serão modificados

## Story

Antes de criar o story, leia completamente o componente e todos os arquivos necessários para compreender sua API pública (types, interfaces, constantes e utilitários utilizados diretamente).

Analise os stories dos componentes localizados no mesmo diretório do componente para o qual está sendo criado o story. Para assim identificar o padrão predominante do projeto. Caso eles não sejam suficientes para identificar o padrão utilizado, amplie a busca para outros diretórios de `src/components`

O novo story deve seguir o mesmo padrão identificado para:

- Estrutura do arquivo
- Convenções de import
- Nomenclatura
- Organização das seções
- Padrão de export
- Estilo de escrita
- Uso de mocks

Os comportamentos do componente contemplados no story devem incluir:

- Estado padrão
- Estados alternativos
- Casos extremos
- Uso mínimo
- Uso completo (quando fizer sentido)

Evite exemplos redundantes. Cada renderização deve demonstrar um comportamento diferente do componente. Prefira poucos exemplos bem distintos a muitos exemplos semelhantes.

## Mock

Se for necessário, você pode criar types e interfaces em formato de mock para demonstrar como usar o componente. Eles devem:

- Representar casos reais de uso
- Respeitar todos os types do componente
- Utilizar valores plausíveis
- Evitar qualquer dependência de API
- Evitar chamadas assíncronas
- Não importar dados externos

Nunca invente:

- Props inexistentes
- Eventos inexistentes
- Funções utilitárias inexistentes
- Hooks inexistentes
- Arquivos inexistentes

Utilize apenas APIs encontradas no projeto.

## Projeto

A implementação não deve introduzir erros de compilação, imports não utilizados, variáveis não utilizadas, erros de TypeScript ou erros de lint.

Respeite o estilo já adotado pelo projeto. Não introduza novas convenções de nomenclatura, organização ou formatação.

Comentários no código são totalmente desnecessários. Introduza apenas se for extremamente necessário, justifique no próprio comentário o motivo de ele estar ali, e o que preciso fazer para considerar ele "resolvido", para que eu possa removê-lo no futuro.

# Finalização

Ao final, apresente o plano de criação do story ao usuário, conforme estrutura definida no capítulo **Plano**. E aguarde sua aprovação para implementar.

Após implementar, revise os arquivos criados para garantir que todas as restrições e critérios desta skill foram respeitados antes de concluir a tarefa.

# Quando usar

Use essa skill quando o usuário solicitar a criação de um story.
