const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'utility',
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provides information about the user.'),
    async execute(interaction) {
        // interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
        await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);

        // ChatInputCommandInteraction#followUp() to send additional messages: (15 minutes)
        await interaction.followUp({ content: 'What a cool [user](https://dictionary.cambridge.org/es/diccionario/ingles-espanol/user)!', ephemeral: true });
    }
};