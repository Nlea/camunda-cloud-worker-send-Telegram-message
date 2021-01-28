
import {ZBClient} from "zeebe-node"
import{config} from "dotenv";
import TelegramBot from "node-telegram-bot-api"
import got from "got";

config();
const zbc = new ZBClient();

const TelegramBot = require('node-telegram-bot-api');
const apikey = process.env.TELEGRAM_API_KEY ;
const chatid = process.env.TELEGRAM_MESSAGE_ID;
const bot = new TelegramBot(apikey, {polling: true});



zbc.createWorker("send-update", async (job, complete) => {  

    const { activity } = job.variables;
    const { updateInformation: { cases } } = job.variables;
    const { updateInformation: { weekIncidence}} = job.variables;
    const { updateInformation: {deaths}} = job.variables;
    const { updateInformation: { recovered}} = job.variables;

    
    const smileyWithMask = " \u{1F637}";
    const pointingDown = "\u{1F447}";
    const stopSign ="\u{1F6D1}";
    const sunflower = "\u{1F33B}";
    

    const text = "Hello there,  \n \n  Here comes the Corona update for Germany \n" + stopSign +" The situation is still serious: \n \n" +
    "<b>cases:</b> \n" + cases +"\n \n"+ "<b>deaths: </b> \n" + deaths + "\n \n" + "<b>recorvered:</b> \n" + recovered +"\n \n" +
    "<b>week incidence:</b> \n" + weekIncidence + "\n \n" + "Take care and stay healthy " + smileyWithMask + "\n \n"+
    sunflower + "<b>Suggested lockdown activity for the day: </b>: \n" + activity + "\n\n" + pointingDown + "If you like tell us how it went" + pointingDown;
  

    const message = await bot.sendMessage(chatid, text, {parse_mode : "HTML"});   

    //const message = await got('https://api.telegram.org/bot' + apikey + '/sendMessage?chat_id=' + chatid + '&text=' + text).json();  
    console.log(activity);
    console.log("new Cases: " + cases);
    console.log("week Incidence" + weekIncidence);
    complete.success();
    } );

