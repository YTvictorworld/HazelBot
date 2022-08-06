class interactionCreate {
  constructor(client) {
    this.client = client;
    this.name = "interactionCreate";
  }
  async run(interaction) {
    if (!interaction.isCommand()) return;
    if (!interaction.isChatInputCommand()) return;
    const command = interaction.client.slashcmds.get(interaction.commandName);
    if (!command) return;
    if (interaction.commandName === command.data.name) {
      command.run(this.client, interaction);
    }
  }
}
export default interactionCreate;
