# ecglobal-test-app

## Tecnologias utilizadas

- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/orm) com Postgres
- [Redis](https://redis.io/) para cache automático

## Como rodar

Recomendado usar o Node 20

### Habilitar o PNPM

```bash
corepack enable pnpm
```

### Instalar dependências

```bash
pnpm install
```

### Inicializar banco de dados

Caso seja necessário, crie um container docker com o Postgres:

```bash
docker run --name postgres -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=ecglobal_test -d postgres
```

Caso já possua um banco de dados configurado, configure as credenciais no arquivo .env.

Este comando cria as tabelas no banco de dados e roda o script de seed, que cria
alguns posts e membros de exemplo:

```bash
pnpm prisma migrate dev
```

### Iniciar

```bash
pnpm start
```

### Acessar a API

A API fica disponível em <http://localhost:3000>
