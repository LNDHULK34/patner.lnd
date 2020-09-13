
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
      
   hama.channels
        .get("695462389147238451").send(
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
hama.login("NzU0NDk1OTQ1NTA4Mzg5MDM0.X11lGw.e4hXUFFzzi1EVhmg0h287nVxkkk")
