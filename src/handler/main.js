import Discord from "discord.js";
import { Client } from "discord.js";
import Events from "../classes/Events.js";
class Main extends Client {
  constructor() {
    super({
      intents: 771,
      ws: {
        properties: {
          $browser: "Discord Android",
        },
      },
    });

    //Load

    Events(this).then(() =>
      this.login(
        "MTAwNDQ3MzEwOTEwNzE4MzYzNg.GzjkHQ.2P0hxFe66lEMMLavfCaz3uLaYDm5bq3tms8HhU"
      )
    );
  }
}
export default Main;
