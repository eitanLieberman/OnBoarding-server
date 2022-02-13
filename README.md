# OnBoarding

## Description

This is the server side of the Onboarding service.

this is a CRUD api built with express,mySQL and sequelize.

## Installation

run npm install

```bash
npm install
```

The .env file contains a guest user for the sql DB, the user is available until 1/3/22 . contact me if you need access

## Features

1. The auth route is for registration and login for a medical personnel(presented docId), you will only be able to register with an id that is in the doctorDB array that represents the hospital's external database of registered personnel.

2. logging in will supply a JWT which grants access to all patients CRUD actions

3. The patients route contains the basic CRUD actions and also a search engine to find a patient by his name,id or the operation he wil undergo.
   in order to add more details about the patient add to the Patient schema in 'models/Patient':

```javascript
extraDetail: Sequelize.STRING;
```

also in the server js
comment in:

```javascript
{
  alter: true;
}
```

this will read and changes in the patient and adjust the DB schema
