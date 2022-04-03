1 open windows store => download "UBUNTU"
2 open UBUNTU -> create username ,password
3 sudo apt-add-repository ppa:redislabs/redis
4 sudo apt-get update
5 sudo apt-get upgrade
6 sudo apt-get install redis-server
7 sudo service redis-server start
//open other ubuntu window and send ping - redis-cli =>127.0.0.1:6379> ping
//Video "download ubuntu and download Redis with Ubuntu" =>https://www.youtube.com/watch?v=_nFwPTHOMIY
8 create .env file in base source just lol i create for you 
enter .env  file you show following 
    REDIS_HOST = localhost
    REDIS_PORT=6379
    REDIS_PASS

9 after get to backend folder "npm install"  cd learn-app => cd project => cd realtime-chat => cd backend -npm i
10 npm run dev

11 after cd learn-app npm start