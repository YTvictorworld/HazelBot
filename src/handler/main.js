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
        "MTAwNDQ3MzEwOTEwNzE4MzYzNg.GaZrSY.rZCYpp6VJwp6wrwu2VMyyEemww3gdwZaep9IAA"
      )
    );
  }
}
/*This was made by VictorWorld#0880
  -GitHub: YTvictorwold
  -
*/
export default Main;
