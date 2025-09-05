# 🎮 API de Jogos

Uma API desenvolvida em **Node.js** com **TypeScript** e **Prisma ORM** para gerenciar jogos e personagens.  
Com ela, é possível:  
- Criar, listar, atualizar e deletar **jogos**  
- Criar, listar, atualizar e deletar **personagens**, vinculando-os a um jogo específico  

A API pode ser utilizada tanto via **backend** (com respostas exibidas no terminal da IDE) quanto via **Postman** para testes mais interativos.

---

## 🚀 Tecnologias Utilizadas

- **Node.js + TypeScript** → Backend tipado e escalável  
- **Prisma ORM** → Conexão com o banco de dados e migrations  
- **Express** → Criação de rotas REST  
- **Postman** → Testes de endpoints  
- **DTOs** → Padronização dos dados de entrada e saída  
- **HandleError** → Tratamento centralizado de erros com try/catch  

---

### Exemplos de Endpoints

- **Criar Jogo**: `POST /jogos`
- **Listar Jogos**: `GET /jogos`
- **Atualizar Jogo**: `PUT /jogos/:id`
- **Deletar Jogo**: `DELETE /jogos/:id`

- **Criar Personagem**: `POST /personagens`
- **Listar Personagens**: `GET /personagens`
- **Atualizar Personagem**: `PUT /personagens/:id`
- **Deletar Personagem**: `DELETE /personagens/:id`

---

## Documentação da API

Você pode acessar a documentação da API no Postman através do seguinte link: [API de Jogos - Postman](https://documenter.getpostman.com/view/34456709/2sB3HkpLJd)

---

## Como Executar
1. Clone o repositório: ```bash git clone <URL_DO_REPOSITÓRIO> cd <NOME_DA_PASTA> ```
2. Troque as credenciais no arquivo `.env` conforme necessário.
3. Troque a porta do localhost no arquivo `index.ts` conforme necessário.
4. Instale as dependências: ```bash npm install ```
5. Execute as migrations: ```bash npx prisma migrate dev ```
6. Inicie a API: ```bash npm run dev ```
Agora você pode fazer chamadas à API usando o Postman ou diretamente no terminal da sua IDE!

### Contribuição

Sinta-se à vontade para contribuir com melhorias e correções. Abra uma issue ou um pull request!

### Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.

### Autor

Pedro Feld, analista e desenvolvedor de sistemas.