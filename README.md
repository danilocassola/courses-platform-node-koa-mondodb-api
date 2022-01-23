# Courses Platform Backend API - node-koa-mongodb

> Courses Platform Backend API.

## Development

- Clone the repo

```bash
$ git clone https://github.com/danilocassola/courses-platform-node-koa-mondodb-api.git
```

- Install dependencies

```bash
$ npm install
```

- Run scripts

| Action                 | Usage          |
| ---------------------- | -------------- |
| Start development mode | `npm start`    |
| Lint code              | `npm run lint` |

## Environment

```yaml
# .env file
DATABASE = <replace to your monngoose url>
PORT = 3000
JWT_SECRET = somethingsomething
```

## Endpoints

<br />

### Auth routes

| Method | Endpoint           | Description |
| ------ | ------------------ | ----------- |
| POST   | `/api/auth/login`  | User login  |
| POST   | `/api/auth/signup` | User signup |

<br />

### User routes

| Method | Endpoint                  | Description          |
| ------ | ------------------------- | -------------------- |
| GET    | `/api/users`              | Get all users        |
| GET    | `/api/users/:id`          | Get user             |
| PUT    | `/api/users/:id`          | Update user          |
| DELETE | `/api/users/:id`          | Delete user          |
| PUT    | `/api/users/password/:id` | Chande user password |

<br />

### Course routes

| Method | Endpoint           | Description    |
| ------ | ------------------ | -------------- |
| POST   | `/api/courses`     | Create course  |
| GET    | `/api/courses`     | Get all course |
| GET    | `/api/courses/:id` | Get course     |
| PUT    | `/api/courses/:id` | Update course  |
| DELETE | `/api/courses/:id` | Delete course  |

<br />

### Module routes

| Method | Endpoint                  | Description   |
| ------ | ------------------------- | ------------- |
| PUT    | `/api/courses/:id/module` | Create module |
| GET    | `/api/courses/:id/:modId` | Get module    |
| PUT    | `/api/courses/:id/:modId` | Update module |
| DELETE | `/api/courses/:id/:modId` | Delete module |

<br />

### Lesson routes

| Method | Endpoint                         | Description   |
| ------ | -------------------------------- | ------------- |
| PUT    | `/api/courses/:id/:modId/lesson` | Create lesson |
| GET    | `/api/courses/:id/:modId/:lesId` | Get lesson    |
| PUT    | `/api/courses/:id/:modId/:lesId` | Update lesson |
| DELETE | `/api/courses/:id/:modId/:lesId` | Delete lesson |

<br />

## Author

Danilo Cassola

## License

[MIT](https://github.com/danilocassola/courses-platform-node-koa-mondodb-api/blob/master/LICENSE)

[license-url]: https://opensource.org/licenses/MIT
