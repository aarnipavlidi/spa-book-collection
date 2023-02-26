# SPA Book Collection on React

##### How to run project locally?

1) Clone repository into own computer.
2) Install required modules on both "client" & "server" folder, so e.g at the root `cd client && npm install` and same thing for the "server" folder.
3) Make sure that for Node.js you are running following version `v16.14.2`.
4) Once you have installed libraries on both folders, then we can start project by running following command `npm run dev` (on server folder).
5) This script will now start the project on development envinronment!

##### Do I need any .env files?

Yes, frontend side is using only one (1) following variable:

```sh
REACT_APP_APOLLO_SERVER_URL=<your_backend_url_here>
```

Variable value can look for example: `http://localhost:4000/graphql`, where "4000" is the port number. Make sure that you are placing variable inside the `client` folder root and file has be saved as `.env.development`.

## *Scripts*

##### graphql-codegen (client folder)

```sh
npm run compile-cg
```

> As project is using TypeScript, we want to provide different types for GraphQL usage. The way this script works, is that once it is being executed on the terminal  it will reference `codegen.ts` (located on the root) and use the *config* variable with it's given settings. Once script has been finished, it will store all related types under `types/graphql/` folder.

> Purpose of all this, is that we want to automate different types for each query/mutation etc. so whenever we make a change into backend (with GraphQL types) or bring new type, then we can just execute the script and update all the necessary types on the client side.


#### cypress (client folder)

```sh
npm run cy:open
```
> This will open Cypress e2e tests and do some basic tests for the application, such as testing that are books being rendered back to the user or if adding new book or deleting current one works.


