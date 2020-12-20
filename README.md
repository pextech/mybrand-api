
![build status](https://travis-ci.org/pextech/mybrand-api.svg?branch=develop)

# mybrand-api
# mybrand-UI

My personal portfolio website

![image](landing.png)

# API Endpoints included

### User

- **POST /signUp:** Create an account
- **POST /login:** Log into your account

### Blog

- **POST /blog:** Create a Blog post
- **GET /blog/:blogID:** Fetch a single Blog post
- **GET /blog:** Fetch all blogs
- **PATCH /blog:blogdID:** Update a single Post
- **DELETE /blog:blogdID:** Delete a post

### Query

- **POST /messages:** Create a message
- **GET /messages:** Fetch all messages
- **DELETE /messages/:messageID:** Delete a message

# [Documentation](https://api-mybrand.herokuapp.com/api-docs/)

# Installation and Environment Setup

**Clone the repository from [Github](https://github.com/pextech/mybrand-api.git).**

( You will need **Git** for this if you are running a Windows PC, Get it [HERE](https://git-scm.com/) )

```
git clone https://github.com/pextech/mybrand-api.git
```

**To Install all dependencies:**

```
npm install
```

**To run the tests:**

```
npm run test 
```

**Now to start the app:**

```
npm run start
```

**To start the app in development mode:**

( You need **nodemon** installed for this, run `npm i -g nodemon` to install it )

```
npm run dev-start
```

# Tools used

- Server-Side Framework: **Node/Express**
- Testing framework: **Mocha/Chai**

# More Tools

- Continuous integration: **[Travis-Ci](travis-ci.org)**
- ES6 Transpiler: **[Babel](babeljs.io)**
- Test coverage: **[nyc](https://www.npmjs.com/package/nyc)**
- Maintainability: **[Code climate](https://codeclimate.com)**
- Deployment: **[Heroku](https://www.heroku.com)** and **[Netlify](https://www.netlify.com/)**

# Deployments

- The UI template is hosted on Github Pages at https://pextech.github.io/MyRezume/html/index.html

- The API is hosted on Heroku at https://api-mybrand.herokuapp.com

# Author:

**Mupenzi Cedrick (pextech)**
