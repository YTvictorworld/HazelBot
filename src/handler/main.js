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
        "MTAwNDQ3MzEwOTEwNzE4MzYzNg.Ge7KwS.dtEVprdYXba8sxh-3zIogttYh8v2o0R97mMRPQ"
      )
    );
  }
}
export default Main;
