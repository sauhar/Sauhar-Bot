const Discord =require('discord.js')
const bot = new Discord.Client();



bot.on('ready',() =>{
    console.log("This bot is online!")
})
bot.on('message',(message)=>{
    //getting message from client
    if (message.author.bot) return; //stopping bot to respond to its message
    //checking any mention in message
    let check = message.mentions.users.first();
    console.log("check"+check);
    if (typeof check !== 'undefined'){
        sauharBotReply(message);
    }
    
});

function sauharBotReply(message){
    var mentionedUserId = message.mentions.users.first().id;
    if (mentionedUserId == 460412608844005396) {

        var reply;
        console.log(message.content);
              if (message.content.includes("pubg")) {
            //reading json file

            console.log("pubg text found in message");
            reply = ' :wave: Hi this is me Sauhar Bot. Your message has been send to Sauhar, wait for reply. Have nice day';
        } else {
            reply = "Hi this is me Sauhar Bot.Please leave your message";
        }
        message.reply(reply)
            .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
            .catch(console.error);

    }

}
    


bot.login(process.env.BOT_TOKEN);
