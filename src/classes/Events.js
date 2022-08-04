import path from "path";
import fs from "fs";
import commons from "../other/commons.js";
const { __dirname } = commons(import.meta.url);
export default async function (client) {
  const files2 = fs.readdirSync(path.join(__dirname, "../events"));
  for (const file of files2) {
    const events = fs.readdirSync(path.join(__dirname, `../events/${file}`));
    for (const event of events) {
      const { default: eventFunction } = await import(
        `../events/${file}/${event}`
      );

      const classEvent = new eventFunction(client);
      if (!classEvent.run) console.log(classEvent.name + " No tiene run");
      client.on(classEvent.name, (...args) => {
        return classEvent.run(...args);
      });
      console.log(`${file} - ${classEvent.name} Se cargo - ✅`);
    }
  }
}
