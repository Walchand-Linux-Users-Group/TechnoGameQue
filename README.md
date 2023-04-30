<div>
  <h1> <img src="https://res.cloudinary.com/ravikjha7/image/upload/v1682837647/Tweet_hzikla.png" width="17"/> NODEMANIA <img src="https://res.cloudinary.com/ravikjha7/image/upload/v1682837647/Tweet_hzikla.png" width="17"/></h1>
</div>

## What is NodeMania

The backend competition(NodeMania) hosted by Walchand Linux Users' Group (WLUG) focuses on creating a functional backend using MongoDB, Express and NodeJS technologies. Participants will be required to create APIs that can handle requests from clients and perform CRUD (Create, Read, Update, Delete) operations on a database.

Participants will be given a template repository with some initial code for the backend, which they can use as a starting point to develop their own backend. The competition will require participants to build additional APIs that meet specific requirements provided by the organizers.

The judges will evaluate the submissions based on various criteria such as code quality, efficiency, scalability, and functionality. The winning participants will be rewarded with prizes and recognition. Overall, the competition will be a great learning experience for participants to improve their backend development skills and compete with other developers in the field.

---

## Problem statement

We challenge you to build a system which is able to manage multiple user data as specified in the ([API Contract](#api-contract)). Requests will be accepted over HTTP.

![NodeMania Guide](https://github.com/Walchand-Linux-Users-Group/TechnoGameQue/blob/main/assets/NodeMania.png)

---

### Technical details

1. Your HTTP app need to expose APIs ([API contract](#api-contract)) on given specified port
2. Application needs to persist data across restarts
3. Do not touch the GitHub actions code. It is used to test your code automatically and score it. Any modifications will lead to immediate disqualification.
4. Maximum time a single request can take is 10 seconds

---

#### Data to be stored

```json
{
id: string,
fullname: string
}
```

---

## API contract

#### GET /tweet

##### Response

- Status : `200`
- Content : `Hola Amigo!`

#### POST /user

Creates a new user

##### Request Body

- Content : `{fullname: string}`

##### Response

- Status : `201`
- Content : `{id: string, fullname: string}`

#### GET /user/:id

Returns an user having specific id

###### Response

- Status : `200`
- Content : `{id: string, fullname: string}`

#### PUT /user/:id

Updates the user having the particular id

###### Request Body

- Content : `{fullname: string}`

##### Response

- Status : `200`
- Content : `{id: string, fullname: string}`

#### if (id does not exist)

- Status : `404`
- Content : `{error: 'User not found'}`

#### DELETE /user/:id

Deletes an user having specific id

##### Response

- Status : `200`
- Content : `{id: string, fullname: string}`

#### if (id does not exist)

- Status : `404`
- Content : `{error: 'User not found'}`

#### GET /user/all

Returns information of all the users in an array

##### Response

- Status : `200`
- Content : `[{id: string, fullname: string}, {id: string, fullname: string},...]`

## _ IMPORTANT _

- use `npm run start` command to run your code
- Do not change `.github/workflows/nodejs.yml` file else your code will be disqualified
- You can create user model and schema and use it in your code
- You can check Leader Board to see your score [LIVE](https://technogames-2021.herokuapp.com/leaderboard)
- Do not change the PORT number

### How to use GitHub

- To push your code to github, follow these steps:
- Paste your the following commands in your terminal:
  ```bash
  git add .
  git commit -m "changes"
  git push -u origin main
  ```
