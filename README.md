# CartoesBloqueioWeb

Aplicação Angular para bloqueio de cartões.

## Requisitos

- Node.js e npm
- Stubmatic instalado globalmente para executar o mock local

## Instalação

Na raiz do projeto, instale as dependências:

```bash
npm install
```

O Stubmatic não faz parte das dependências locais do projeto. Instale-o globalmente para disponibilizar o comando `stubmatic` usado pelo script do mock:

```bash
npm install -g stubmatic
```

## Executar a aplicação com o mock

O mock recebe as requisições na porta `3000`. Para testar a aplicação localmente, mantenha o mock e a aplicação em execução em terminais separados.

No primeiro terminal, na raiz do projeto, inicie o mock:

```bash
npm run mock
```

No segundo terminal, inicie a aplicação com o proxy local:

```bash
npm run start:local
```

Acesse [http://localhost:4200](http://localhost:4200). O proxy encaminha as chamadas a `/operacoes/bloqueio-cartoes` para o mock em `http://127.0.0.1:3000`.

O mock responde à requisição `POST /operacoes/bloqueio-cartoes` com o conteúdo de `mocks/test/stubs/bloqueio-cartoes.json`. As configurações e os mapeamentos ficam em `mocks/test`.

## Comandos disponíveis

Execute os comandos a seguir na raiz do projeto:

| Comando | Descrição |
| --- | --- |
| `npm start` | Inicia o servidor de desenvolvimento Angular em `http://localhost:4200`. |
| `npm run start:local` | Inicia a aplicação com a configuração local e o proxy para o mock. |
| `npm run mock` | Inicia o Stubmatic a partir das configurações em `mocks/test`. Requer instalação global do Stubmatic. |
| `npm run build` | Gera a build de produção em `dist/`. |
| `npm run watch` | Gera a build de desenvolvimento e recompila ao detectar alterações. |
| `npm test` | Executa os testes unitários com Jest. |
| `npm run lint` | Verifica os arquivos TypeScript e HTML com ESLint. |
| `npm run lint:fix` | Corrige automaticamente os problemas de lint que puder resolver. |

