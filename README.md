# Developer Connect

Social media app with MongoDB, Express, React, and NodeJS.

## Process

### Ignored files

- gitignore

### Terminal:

- npm init
  - entry point: server.js
  - license: (ISC) MIT
- Regulare dependencies:
  - npm i express express-validator bcryptjs config gravatar jsonwebtoken mongoose request
  - npm i -D nodemon concurrently
    - Nodemone: Automatically loads server

### server.js

- Main entry file
- Set up express and PORT
- Create npm scripts, in package.json

### package.js

- Replace:

```javascript
  "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
  },
```

with

```javascript
  "scripts": {
      "start": "node server",
      "server": "nodemon server"
  },
```

### Run Application

- `node run server`

### Postman

- Create new
- Enter localhost link at the top and press enter
- Expected result: API Running
