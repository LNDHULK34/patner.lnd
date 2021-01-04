
const Discord = require("discord.js");
const hama = new Discord.Client(); 

hama.on("ready", () => {
  hama.user.setActivity("بۆ ڕێکلام کردن لینکی سێرڤەر بنێرە", {
    type: "PLAYING" 
  }); 
  hama.user.setStatus("Idle");
});



hama.on("message", message => {
  if (message.content.includes("discord.gg")) {
    message.author.send(` سێرفەرکەم دانا تۆش داینێ
https://discord.gg/uuSpCSf

`) 
    
    if (message.channel.type === "dm") {
            if (message.author.id === hama.user.id) return;

  let hama1 = hama.channels.cache.get("695462389147238451")
hama1.send(
          `**💣❤نێردرا لەلایان**
<@${message.author.id}> ` 
    +
     `
👇سێرڤەرەکە
${message.content}`

        )

    } 
  } 
}); 
hama.login("")
