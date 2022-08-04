import { createRequire } from "module"; //crea require - fileName - dirname esos 3 estos importes
import { fileURLToPath } from "url";
import { dirname } from "path";

export default function (metaURL = import.meta.url) {
  if (typeof metaURL !== "string") throw new Error("metaURL must be a string");
  const require = createRequire(metaURL);
  const __filename = fileURLToPath(metaURL);
  const __dirname = dirname(__filename);
  return { require, __filename, __dirname };
}
