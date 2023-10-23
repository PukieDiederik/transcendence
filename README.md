# Transcendence
Welcome to the transcendence project. This is a project for the 42 ciriculum where the goal is to create a website to play pong against other users.

This project is split into 2 parts: frontend and backend. These are located in their respective folders. The frontend is run with Vuejs, the backend is run with NestJS and the database is using Postgres. It should be started using the docker compose file provided.

## How to setup the project

We should first setup the `.env` file. An example enviroment file is in `.env.example`.
```
cp .env.example .env
```
Now you should open the `.env` file in your favorite editor and fill in all the fields.

Now we can use docker to start the servers.

```
docker compose up
```

## Contributing
Fork and clone the project.

We will have a template for pull requests. The title of the PR should be `[Name] - [Subject]`, where `[Name]` should be your name and `[Subject]` should be the subject of the PR. It will also help to add tests to your code which the reviewer can run. Your code should have been passed through prettier and ESLint before the pull request, otherwise your PR will not be accepted.

template:
```md
A general explaination of what has changed in this PR. This space can also be used to explain some parts of your code which might seem confusing.

### What has changed:
- A bullet point list to show what has changed. It can provide extra context where needed.

### Related issues:
- #1
```

### example:
---

A general explaination of what has changed in this PR. This space can also be used to explain some parts of your code which might seem confusing.

### What has changed:
- A bullet point list to show what has changed. It can provide extra context where needed.

### Related issues:
- #1

---

When reviewing please remember to be thorough. The code should have been run through prettier (and therefore should not change when running it through prettier again). It should also pass ESLint, this is to make sure we don't get unexpected errors later. Be polite when reviewing and make sure to show the reasons why you want something changed.