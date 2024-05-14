import fs from "fs";

function lerArquivoHTML(path: string): string {
  return fs.readFileSync(path, "utf8");
}
export const emailTemplate = lerArquivoHTML("./index.html");
