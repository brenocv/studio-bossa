// Pós-build: define lang="en-GB" no HTML estático de todas as páginas em /en/.
// (O layout raiz é partilhado e gera lang="pt-PT" por defeito.)
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f === "index.html") {
      writeFileSync(p, readFileSync(p, "utf8").replace(/<html([^>]*)lang="pt-PT"/, '<html$1lang="en-GB"'));
      count++;
    }
  }
}
let count = 0;
if (existsSync("docs/en")) walk("docs/en");
console.log(`✓ lang=en-GB aplicado em ${count} páginas de /en/`);
