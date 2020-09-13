
const Discord = require("discord.js"); ///crate by mrfix
const robot_hama = new Discord.Client(); ///crate by mrfix


robot_hama.on("ready", () => {
  robot_hama.user.setActivity("بۆ ڕێکلام کردن لینکی سێرڤەر بنێرە", {
    type: "PLAYING" 
  }); 
  robot_hama.user.setStatus("ONLINE");
});



robot_hama.on("message", message => {
  if (message.content.includes("discord.gg")) {
        if (message.channel.type === "dm") 
    {
      robot_hama.channels.get("695462389147238451").send(

          `**ڕیکلام کرا**
<@${message.author.id}> `+`${message.content}`

        );

    } 

  }

}); 

robot_hama.login("NzU0NDk1OTQ1NTA4Mzg5MDM0.X11lGw.e4hXUFFzzi1EVhmg0h287nVxkkk");

