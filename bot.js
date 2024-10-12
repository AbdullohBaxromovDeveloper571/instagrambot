const { Telegraf } = require("telegraf");
const request = require("request");
require("dotenv").config()
const token = "7358070145:AAFoRoKf2AC9k7AXePiExNX4KGBFQt4btUo";

const bot = new Telegraf(token);

bot.command("start", async (ctx) => {
  await ctx.replyWithHTML("Assalomu alaykum !");
});

bot.on("message", async (ctx) => {
    const link = ctx.update.message.text
    const request = require('request');

    const options = {
      method: 'GET',
      url: 'https://instagram-downloader36.p.rapidapi.com/instagram',
      qs: {
        insta_url: 'https://www.instagram.com/reel/C9rwYIkt0_D/?igsh=bnNtbWJxaHdrZ29j'
      },
      headers: {
        'x-rapidapi-key': '9fdf493747msh1277d904bd21d80p15f8d6jsn87cffa6e6efc',
        'x-rapidapi-host': 'instagram-downloader36.p.rapidapi.com'
      }
    };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const data = JSON.parse(body)
        console.log(data.video);
        await ctx.telegram.sendVideo(ctx.chat.id, `${data.video}`)
      
    });
        
        
    });
  
    
  


bot.launch().then(() => {
  console.log("Bot started...");
});
