import Basecmd from "../../classes/Basecmd.js";
import { SlashCommandBuilder } from "discord.js";
class test extends Basecmd {
  constructor(client) {
    super(client, {
      data: new SlashCommandBuilder()
        .setName("game")
        .setDescription("Some Description")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Some Description")
            .setRequired(true)
        ),
    });
  }
  async run(client, interaction) {
    interaction.reply("Funciona");
    console.log(interaction.options);
  }
}
export default test;
