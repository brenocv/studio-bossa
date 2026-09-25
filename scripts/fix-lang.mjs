// Pós-build: define lang="en-GB" no HTML estático da versão inglesa (/en/).
// (O layout raiz é partilhado e gera lang="pt-PT" por defeito.)
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const file = "docs/en/index.html";
if (existsSync(file)) {
  const html = readFileSync(file, "utf8").replace(/<html([^>]*)lang="pt-PT"/, '<html$1lang="en-GB"');
  writeFileSync(file, html);
  console.log("✓ lang=en-GB aplicado em", file);
}
