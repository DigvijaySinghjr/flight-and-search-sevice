# welcome to Flight Service 

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the download project
- Create a `.env` file in the root directory and add the following environment  variable 
- `Port=3000`
- Inside the `src/config` folder create a new file `config.jso` and then add following the pieces of json.

{
  "development": {
    "username": "your_DB_login_name",
    "password": "your_DB_password",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }, 
}

- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute

`npx sequelize db:migrate`



## DB Design
  -Airplane Table
  -Flight
  -Airport
  -Ciity

  -A flight belongs to an airplane can be used in multiple flights
  -A city has many airports but one airports belong to  a city
  - One airport can have many flights, but a different flight belongs to one airport

  -