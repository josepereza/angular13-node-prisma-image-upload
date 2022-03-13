# nodejs-login-auth-api-prisma-mysql
## En la carpeta .env tenemos que modificar nuestra base de datos:
```
DATABASE_URL="mysql://root:mipassword@localhost:3306/prisma"
```
![image](postman1.png)
![image](postman2.png)
![image](postman4.png)

# Tutorial para una base de datos mysql ya existente
origen:
* https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-node-mysql
* https://www.prisma.io/express
## backend
```
npx express-generator --view=ejs
npm install prisma --save-dev
npx prisma
npx prisma init
```
### Connecting your database
To connect your database, you need to set the url field of the datasource block in your Prisma schema to your database connection URL:

prisma/schema.prisma
```
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```
Note that the default schema created by prisma init uses PostgreSQL, so you first need to switch the provider to mysql:
```
prisma/schema.prisma
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```
In this case, the url is set via an environment variable which is defined in .env:
```
.env
DATABASE_URL="mysql://johndoe:randompassword@localhost:3306/mydb"
```
You now need to adjust the connection URL to point to your own database.

The format of the connection URL for your database typically depends on the database you use. For MySQL, it looks as follows (the parts spelled all-uppercased are placeholders for your specific connection details):
```
mysql://USER:PASSWORD@HOST:PORT/DATABASE 
```
Here's a short explanation of each component:
```
USER: The name of your database user
PASSWORD: The password for your database user
PORT: The port where your database server is running (typically 3306 for MySQL)
DATABASE: The name of the database
```
As an example, for a MySQL database hosted on AWS RDS, the connection URL might look similar to this:

.env
```
DATABASE_URL="mysql://johndoe:XXX@mysql–instance1.123456789012.us-east-1.rds.amazonaws.com:3306/mydb"
```
When running MySQL locally, your connection URL typically looks similar to this:

.env
DATABASE_URL="mysql://root:randompassword@localhost:3306/mydb"

As a next step, you will introspect your database. The result of the introspection will be a data model inside your Prisma schema.

Run the following command to introspect your database:
```
npx prisma db pull 
```
This commands reads the DATABASE_URL environment variable that's defined in .env and connects to your database. Once the connection is established, it introspects the database (i.e. it reads the database schema). It then translates the database schema from SQL into a Prisma data model.

### Install Prisma Client
```
npm install @prisma/client
npx prisma generate //This command reads your Prisma schema and generates your Prisma Client library:
```
Create a new file named index.js and add the following code to it:

index.js
```
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
```
Ejemplo con  nuestro routes/users.js , que  fue creado con nuestro express generate
```
var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const  datos= await prisma.user.findMany()
  console.log(datos)
}


/* GET users listing. */
router.get('/', function(req, res, next) {
  main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
  res.send('respond with a resource');
});

module.exports = router;

```
