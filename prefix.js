client.on("message", msg => {
  if(msg.content === `<@${client.user.id}>`)
  msg.channel.send("meu prefixo é `n!`") // mobile
})

client.on("message", msg => {
  if(msg.content === `<@!${client.user.id}>`)
  msg.channel.send("meu prefixo é `n!`") // pc
})
