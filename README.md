
# Github commit history

Project to get all commits from a public repo from github, on the UI(localhost:3000) you have to enter as an input a valid username and a valid and public repository of that user.


## Deploy

This project can be locally deploy with docker-compose. If there is an update on the repo run docker-compose build to recompile the files and get the new changes with docker.
To run the project, on the root folder run:
```bash
  docker-compose up -d
``` 
The frontend run on http://localhost:3000 and the rest-api is on  http://localhost:4000/api

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

##  Testing

the tests remains pending

## Authors

- [@cocacodev](https://github.com/cocaco-dev)

