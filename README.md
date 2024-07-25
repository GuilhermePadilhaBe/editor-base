# Design System da Clickmax

## O que tem nesse monorepo?

Este monorepo inclui os seguintes packages/apps:

### Apps e Packages

- `docs`: Um boilerplate do projeto Next.js (caso resolvermos criar uma doc profissional para o email-builder)
- `email-builder`: Biblioteca de componentes React do nosso editor + Storybook
- `eslint-config-custom`: Configurações de `eslint` (inlcui `eslint-config-next` e `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`'s utilizados no monorepo

Cada package/app é 100% [TypeScript](https://www.typescriptlang.org/).

### Utilitários

Este monorepo possui alguams ferramentas adicionais já configuradas para você"

- [TypeScript](https://www.typescriptlang.org/) para a verificação da tipagem de maneira estática
- [ESLint](https://eslint.org/) para o linting do código
- [Prettier](https://prettier.io) para a formatação do código

### Build

Para buildar todos os apps e packages, rode o seguinte comando:

```bash
$ pnpm build
```

### Contribuindo

Para contruir neste projeto, siga as seguintes etapas:

```bash
# Escutar modificações em ui e iniciar Storybook para visualizar a construção dos componentes
$ pnpm --workspace email-builder dev
```

#### Regras

Uma vez que os packages estão rodandos, é necessário se atentar à algumas peculiaridades:

- Os testes do componente devem ter 100% de cobertura.

- Devemos ter cuidado ao utilizar libs de terceiro que possuem tokens de estilos próprios. Por exemplo, o Radix possui alguns tokens de altura, responsáveis pela animação de slide de um Accordion.

### Problemas comuns

#### O Storybook não está reconhecendo os estilos do tailwind

- Verifique se o package `email-builder` foi buildado corretamente.

- Reinicie o processo do storybook e do tailwind.

#### Meu IntelliSense do tailwind não está funcionando corretamente

- Reinicie o serviço de IntelliSense do tailwind (ou o próprio VSCode).

- O Intelissense não está disponível para ser utilizado em todos os locais. Existem algumas palavras chaves que ativam ele: a função `cv`, o atributo `className` e o comentário de código `/*tw*/` antes da string que possui as classes tailwind
