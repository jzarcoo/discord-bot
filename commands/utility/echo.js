// Adding options to a command

const { SlashCommandBuilder, ChannelType } = require('discord.js');

const dataSCB = new SlashCommandBuilder()
	.setName('echo')
	.setDescription('Replies with your input!')
    // The simplest form of standard text input with no additional validation.
	.addStringOption(option =>
		option.setName('input')
		    .setDescription('The input to echo back')
            .setRequired(true)
            .setMaxLength(2_000))
    // Channel option to direct the response to a specific channel
	.addChannelOption(option =>
		option.setName('channel')
		    .setDescription('The channel to echo into')
            // Ensure the user can only select a TextChannel for output
			.addChannelTypes(ChannelType.GuildText));

module.exports = {
    category: 'utility',
    data: dataSCB,
    async execute(interaction) {
        const input = interaction.options.getString('input') ?? 'No input provided';
        const channel = interaction.options.getChannel('channel') ?? interaction.channel;

        await interaction.reply(`Echoing: ${input} in ${channel}`);
        await channel.send(input);
    }
};