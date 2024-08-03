// To confirm to Discord that the interaction was received successfully and gives you a 15-minute timeframe to complete your tasks before responding.

const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    category: 'utility',
    data: new SlashCommandBuilder()
        .setName('hi')
        .setDescription('Replies with Hi!'),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });
        await wait(4_000);
        // Which one of these will be executed?!!!!!
        const locales = {
            pl: 'Witaj Świecie!',
            de: 'Hallo Welt!',
        }
        await interaction.editReply(locales[interaction.locale] ?? 'Hi');
    }

};
