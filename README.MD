## Local Setup

1. **Clone the repository**
   ```
   git clone https://github.com/alexandr-viktorov/GraphQL-API-testing-framework.git
   cd GraphQL-API-testing-framework
   ```

2. **Install dependencies**
   ```
   npm i
   ```

3. **Create a `.env` file** in the root directory:
   ```
   BASE_URL="https://graphqlzero.almansi.me"
   ```

## Running Tests

Launch all tests:
```
npm test
```

Generate tests report:
```
npm run test:report
```
Report will be generated in `./mochawesome-report/mochawesome.html`

## Stack

1. **PactumJS** - https://pactumjs.github.io/api/requests/spec.html
   ```
   npm install pactum
   ```

2. **Mocha** - https://mochajs.org/
   ```
   npm install mocha --save-dev
   ```

3. **Chai** - https://www.chaijs.com/
   ```
   npm install chai
   ```

4. **Mochawesome** - https://github.com/adamgruber/mochawesome#readme
   ```
   npm install mochawesome --save-dev
   ```

5. **pg** - https://node-postgres.com/
   ```
   npm install pg
   ```

6. **gql-query-builder** - https://github.com/atulmy/gql-query-builder
   ```
   npm install gql-query-builder
   ```

7. **JSON Schema** - https://opis.io/json-schema/1.x/structure.html
   ```
   npm install json-schema
   ```

