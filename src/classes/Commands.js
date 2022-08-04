import { Collection } from "discord.js";
import fs from "fs";
import path from "path";
import commons from "../other/commons.js";
const { __dirname } = commons(import.meta.url);

export default async function (client) {
  client.slashcmds = new Collection();
  const file2 = fs.readdirSync(path.join(__dirname, "../commands"));
  for (const file of file2) {
    const slashCmdsFiles = fs.readdirSync(
      path.join(__dirname, `../commands/${file}`)
    );
    for (const SlashCmds of slashCmdsFiles) {
      //import dinamico - devuelve un objecto
      const { default: commandFunction } = await import(
        `../commands/${file}/${SlashCmds}`
      );
      const classCommand = new commandFunction(client);
      if (!classCommand.run)
        console.log(classCommand.data.name + " No tiene run");
      console.log(`${file} - ${classCommand.data.name} Se cargo - ✅`);
      if (classCommand.data.name)
        client.slashcmds.set(classCommand.data.name, classCommand);
    }
  }
}
