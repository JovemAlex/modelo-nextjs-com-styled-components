# Iniciando

### Primeiro, crie um diretório com um nome desejado:

```bash
mkdir my-app
```

### Acesse o repositório:

```bash
cd my-app
```

### Ainda no terminal, execute o comando:

```bash
npx create-next-app . -e https://github.com/JovemAlex/modelo-nextjs-com-styled-components
```
_Este comando irá criar uma aplicação Next.js com base no repositório mencionando após a flag `-e`_

### Com a aplicação criada, agora basta executar os seguintes comando para rodar o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Servidor estando no ar:

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

Você pode começar modificando a aplicação pelo arquivo `app/page.tsx`. A página irá atualizar automaticamente com as suas mudanças.

Este projeto usa [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para otimizar e carregar automaticamente o Inter, uma fonte personalizada do Google.

# Alterar estilos

Para alterar ou adicionar estilos em sua aplicação, você pode usar o arquivo `src/styles/styles.tsx`  
_dentro do arquivo possui exemplos da sintaxe utilizada_

Ao criar um componente é necessário que você exporte e depois importe o componente no aquivo onde será usado

A sintaxe para criação de um componente consiste em:

```javascript
import styled from 'styled-components';

const [Nome do componente] = styled.[Tag HTML]`
  [css padrão];
`;

// Exemplo

const Title = styled.h1`
  text-align: center;
`;

// Exportação
//Caso tenha apenas um componente
export default Title;

// Vários componentes

// 1
export const Component...
// 2
export { Component1, Component2, Component3 }
```

## Decorator

_⚠️ Para que a aplicação funcione com os estilos criados, é necessário que você coloque no topo do arquivo que está criando o Componente estilizado, o decorator  `'use client'`._



