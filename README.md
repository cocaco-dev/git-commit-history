
# Github commit history

Project to get all commits from a repo using react + tailwind css for the frontend and fastify for the rest api



## Deploy

This project can be locally deploy with docker-compose. You need to create an a file called .env on the root of folder "client".
To run the project, on the root folder run:
```bash
  docker-compose up -d
``` 

If you want to run locally you have to run:
 - Backend: folder ./rest-api
```bash
  npm install
  npm start
```
 - Frontend: folder ./client
```bash
  npm install
  npm start
```


## Limitations

- Only can search for public repositories
- The rate limit of public api of github without using authentications is very short [github rate limit](https://docs.github.com/en/enterprise-cloud@latest/developers/apps/building-github-apps/rate-limits-for-github-apps)


## Authors

- [@cocacodev](https://github.com/cocaco-dev)

