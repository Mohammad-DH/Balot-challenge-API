b[![made by](https://img.shields.io/badge/Made%20BY-Mohammad%20DH-%230073ff)]()
[![express](https://img.shields.io/badge/Express.js-4.16.3-%2319a648)]()
[![node](https://img.shields.io/badge/node.js-4.16.3-%2340ff80)]()
[![node](https://img.shields.io/badge/prisma-4.0.0-%23ff6be4)]()
[![yarn](https://img.shields.io/badge/yarn-1.22.19-%233294bf)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]()

# Balot challenge API

      this is a interview project with the goal of making a simple game server.

---

## Table of Contents

- [Before Setup](#before-setup)
- [Quick Setup](#quick-setup)
- [How To Use](#how-to-use)
- [License](#license)

---

### Before Setup

1. make sure node.js is installed on you computer

   > type `node -v` in terminal to see if node is installed on you computer
   >
   > if not you can download it from [here](https://nodejs.org/en/download/)

2. make sure you have npm or yarn

   > npm is included with node.js installation
   >
   > i prefer yarn , you can install it with this command `npm i -g yarn `

3. for testing the api you need a API platform

   > i use postman , you can download it from [here](https://www.postman.com/downloads/)
   >
   > later i will link a file that you can import into postman and test all the routes

4. you need a relational database

   > i used mariadb , learn more about it [here](https://mariadb.org/)

5. (optional) a database administration tool can make working with database much easier
   > i use DBeaver, learn more about it [here](https://dbeaver.io/)

---

### Quick Setup

1. clone the repository / git clone XXXXXXXXXXXXXXXXXXXXX
2. navigate to the folder / cd Balot_challenge_API
3. in the main directory create a .env file with `DATABASE_URL = "your connection string"` and `JWTsecret = "your jwt secret code"`
4. go to ./prisma/schema.prisma and make sure the provider is the same as your database type
5. open terminal or use built in terminal in vs code
6. type `npm install` or `yarn install`
7. wait for installation
8. type `npm start` or `yarn start`

---

### How To Use

postman json [file](./assets/postman.json) can be found in assets directory or just use this path `./assets/postman.json`

1. open postman

2. go to top corner in left side , in workspace area and click on import
   ![step 1](/assets/step1.png)

3. in the import window first click on file and then click on upload files and then select the postman.json in assets directory
   ![step 2 & 3](/assets/step2&3.png)

4. after selecting the file click on import
   ![step 4](/assets/step4.png)

5. now you can see a new collection is added
   ![step 5](/assets/step5.png)

6. click on the collection and then if documentation tab is not open click on the first icon in the left bar and then you can see `View complete collection documentation` click on it and enjoy it .
   ![step 6](/assets/step6.png)

---

### License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

###### made by Mohammad DH
