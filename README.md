# Utilizei o Prisma para realizar a conexão com banco de dados
# Banco Mysql

## Configurações :


# Para criar as migrations com prisma : npx prisma migrate dev --name 'nome da atualização'

# para aplicar uma migration : npx prisma migrate up --name 'nome da atualização'

# para resolver uma migration : npx prisma migrate down --name 'nome da atualização'
# O que ele executa :

. Ele cria um novo arquivo de migração SQL para esta migração
. Ele executa o arquivo de migração SQL no banco de dados

# Prisma Studio é um editor visual para os dados em seu banco de dados. Você pode executá-lo de duas maneiras:

. npx prisma studio
. Instale o aplicativo de desktop a partir dos instaladores. Windows, macOS e Linux são suportados.


# Nota : generate é chamado sob o capô por padrão, após a execução prisma migrate dev. Se o prisma-client-jsgerador estiver definido em seu esquema, isso verificará se @prisma/client está instalado e instalará se estiver faltando.


# Express com TypeScript

. npm install --save @types/express

# My_First_Chat

.Conceito o esperado : É um app web , que seja capaz de enviar mensagens para outros usuários, e que seja capaz de receber mensagens de outros usuários.

## Obetivos do projeto :

. Teste de conhecimento
. Divulgação pessoal ,
. Aprendizado de novas tecnologias ,


## Requisitos do projeto :

. Mysql
. JavaScript
. NodeJs
. Express
. Socket.io
. Prisma

## Estrutura do projeto :

Existem 2 pastas principais :
. Uma {database} , que contém o servidor do banco de dados ,
. Uma aplicação, que contém o servidor web , ** start também da pasta public **

.> cd database > npm run dev

