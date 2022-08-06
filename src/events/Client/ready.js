import Commands from "../../classes/Commands.js";
import { ActivityType } from "discord.js";
class Ready {
  constructor(client) {
    this.client = client;
    this.name = "ready";
  }
  async run() {
    const client = this.client;
    await Commands(client);
    this.client.application.commands.set(
      this.client.slashcmds.map((a) => a.data.toJSON())
    );
    function funcion() {
      const estados = [".gg/arclight", "ArcLight"];
      const Estadosr = estados[Math.floor(estados.length * Math.random())];

      client.user.setActivity(Estadosr, { type: ActivityType.Playing });
    }
    setInterval(funcion, 5000);

    console.log(`Bot On!\nTag: ${this.client.user.tag}`);
    console.log("🟢  Bot Started 🟢");
  }
}

export default Ready;
