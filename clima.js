const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    name: "clima",
    description: "Checks a weather forecast",

    async run (client, message, args){

    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
        // 'C' can be changed to 'F' for farneheit results
        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('Por favor escreva o local')

        if(result === undefined || result.length === 0) return message.channel.send('Local **Inválido**');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Clima em ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x111111)
        .addField('Fuso Horário', `UTC${location.timezone}`, true)
        .addField('Temperatura', `${current.temperature}°`, true)
        .addField('Rajadas de vento', current.winddisplay, true)
        .addField('Umidade', `${current.humidity}%`, true)


        message.channel.send(weatherinfo)
        })        
    }
}
