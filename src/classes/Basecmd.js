/**
 * @typedef {Object} commandOptions
 * @property {string} name
 * @property {string[]} aliases
 * @property {boolean} privated
 * @property {string} description
 * @property {string} usage
 * @property {string} category
 */

class Basecmd {
  /**
   * @param {commandOptions} options
   */
  constructor(client, options = {}) {
    this.client = client;
    this.data = options.data;
  }
}
export default Basecmd;
