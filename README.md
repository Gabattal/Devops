# Devops project

This project allows you to run a web application. 
We used a CI/CD (including deployment) pipeline with Travis CI / Heroku.
We have configured a virtual environment with vagrant and have provisioned it with Ansible.
We also created a docker image of our application within Dockerhub and made a docker orchestration using docker compose.

## Installation

This application is written on NodeJS and it uses Redis database.

1. [Install NodeJS](https://nodejs.org/en/download/)

2. [Install Redis](https://redis.io/download)
   
3. [Install Docker](https://docs.docker.com/get-docker/)
   
4. [Install Vagrant](https://www.vagrantup.com/downloads.html)

5. [Install Ruby](https://rubyinstaller.org/)

6. [Install virtualbox](https://www.virtualbox.org/)

7. Install application

Go to the root directory of the application (where `package.json` file located) and run:

```
npm install 
```

## Usage

1. Start a web server

From the root directory of the project run:

```
npm start
```

It will start a web server available in your browser at http://localhost:3000.

2. Launch vagrant

in the root directory do :
```bash
cd iac
```

then

```
vagrant up
```

3. Build an image

in the root directory do :
```
docker build -t theBeautifulHelloWorld .
```

4. Build and deploy an image :
```
docker-compose up
```

## Links

1. [travis](https://travis-ci.com/github/Gabattal/Devops)
2. [heroku](https://project-devops20.herokuapp.com/)
3. [Dockerhub](https://hub.docker.com/repository/docker/gabattal/devops)

## Authors
 
1. Gabriel ATTAL : gabriel.attal@edu.ece.fr
2. Axel BASOCAK : axel.basocak@edu.ece.fr
3. Louis THIVANT : louis.thivant@edu.ece.fr