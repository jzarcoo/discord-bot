// Initially an interaction token is only valid for 3 seconds, so that's the timeframe in which you are able to use the ChatInputCommandInteraction#reply() method. 
// After the initial response, an interaction token is valid for 15 minutes, so this is the timeframe in which you can edit the response and send follow-up messages. You also cannot edit the ephemeral state of a message, so ensure that your first response sets this correctly.

const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    category: 'utility',
    // This will determine how long the user would have to wait (in seconds) before using the command again.
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        // Discord provides a way to hide response messages from everyone but the executor of the slash command
        await interaction.reply({ content: 'Secret Pong!', ephemeral: true});
        await wait(2_000);
        await interaction.editReply('Pong again!');

        // You may require the Message object of a reply for various reasons, such as adding reactions.
        const message = await interaction.fetchReply();
        console.log(message);
    }
};
