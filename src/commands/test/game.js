import Basecmd from "../../classes/Basecmd.js";
import { SlashCommandBuilder } from "discord.js";
import { EmbedBuilder } from "discord.js";
import commons from "../../other/commons.js";
const { require } = commons(import.meta.url);

class test extends Basecmd {
  constructor(client) {
    super(client, {
      data: new SlashCommandBuilder()
        .setName("games")
        .setDescription("Some Description")
        .addStringOption((option) =>
          option
            .setName("script")
            .setDescription("Enter a string")
            .setRequired(true)
        ),
    });
  }
  async run(client, interaction) {
    const args = interaction.options.getString("script");
    const scripts = require("../../other/games.json");
    const filter = scripts.filter((x) => x.name === args.toLowerCase());
    let dates = [];
    for (let i = 0; i < scripts.length; i++) {
      const element = scripts[i];
      dates.push(element.name);
    }
    if (filter.length === 0) {
      let embed = new EmbedBuilder()
        .setTitle(`---- [ ❔ ] ----`)
        .setThumbnail(`${interaction.guild.iconURL()}`)
        .setColor("#ff0000")
        .setDescription(
          `
        I can't find the requested script these are the ones we have available:  
        ***-------------***
        \`\`\`${dates.join(", ")}\`\`\`
        ***-------------***
        `
        )
        .setFooter({
          text: "ArcLight Scripts",
          iconURL: `${interaction.guild.iconURL()}`,
        })
        .setTimestamp();
      await interaction.reply({ embeds: [embed] });
    } else {
      const embed = new EmbedBuilder()
        .setTitle(`---- [ ${filter[0].name} ] ----`)
        .setThumbnail(`${interaction.guild.iconURL()}`)
        .setColor("#303136")
        .setURL(`${filter[0].link}`)
        .setDescription(
          `
        ***-------------***
          **[PASS] :** ||${filter[0].pass}||
        ***-------------***
        `
        )
        .setFooter({
          text: "ArcLight Scripts",
          iconURL: `${interaction.guild.iconURL()}`,
        })
        .setTimestamp();
      interaction.reply({ embeds: [embed] });
    }
  }
}
export default test;
