### Pré-requisitos

- [Git](https://git-scm.com/downloads)
- [Docker](https://www.docker.com/get-started/)
- [Prisma](https://www.prisma.io/docs/getting-started)

### Rodar o projeto
1. Faça o dowloand do repositório
[Download zip](https://github.com/JonathanSRS/BenderBar/archive/refs/heads/main.zip)
2. Execute o comando
```docker compose up -d --build```
3. Entrar no container
```docker exec -it benderBar-node bash```
4. Crie o arquivo .env e adicione a variável DATABASE_URL
touch .env
5. Migrantion
```npx prisma generate```
```npx prisma migrate dev --name init```

### Requests
**Post**
```
curl -X POST http://localhost:3000/bebidas -H "Content-Type: application/json" -d "{\"nome\": \"Whisky Jack Daniels Honey\", \"marca\": \"Jack Daniels\", \"teor_alcoolico\": 0.35}"
```
**GET**
``` curl http://localhost:3000/bebidas/whisky ```

Caso não utilizar o banco relacional mysql atualizar o provider em 
cd prisma/
schema.prisma
E o arquivo docker-compose.yml