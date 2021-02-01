# camunda-cloud-worker-send-Telegram-Message
A worker written in JS to fetch and log service tasks from Camunda Cloud and complete them. 

 **prerequirements**:exclamation: \
In order to run the worker you need to make sure that a process is deployed to Camunda Cloud, an instance of it has been started and that a service task with the right type is available. You can find the matching process to the worker [here](https://github.com/Nlea/camunda-cloud-corona-update-process) as well as all the information how to get an account and set up a cluster, which will be needed for the worker as well.


For this worker you need a [Telegram Account](https://telegram.org/) and you want to make sure you have the app installed either on your phone or desktop. With your account you can then create a [Telegrambot](https://core.telegram.org/bots#6-botfather). This bot can then sends a message to yourself, to a group or a a channel. Make sure you get the message_id where you want to send it too.


**Set up the worker** \
The worker itself, takes the information from the process puts it into a message and then sends it to the Telegram endpoint you have defined with the message ID. 


If you want to use the worker, make sure to install all needed packages on your machine 

```
npm i -g typescript ts-node
```

This package provides functions to connect to Camunda Cloud (Zeebe)
```
npm i zeebe-node dotenv
```

This package provides functions to connect to the Telegram API
```
npm i node-telegram-bot-api

```
Create a a file .env in the root of the project. 
Put in there your camunda cloud credentials. You can find more information [here](https://docs.camunda.io/docs/guides/setting-up-development-project#configure-connection)
Put in there as well your telegram credentials (Telegram_Api_Key and Telegram_Message_ID)





To run the worker open a terminal and use the command:

```javascript
ts-node src/app.ts
```
As soon as a task with the type is avaidable the worker will fetch and lock it and then complete it. 

If you like to build your own worker from scretch you can follow this [tutorial](https://docs.camunda.io/docs/guides/setting-up-development-project)
