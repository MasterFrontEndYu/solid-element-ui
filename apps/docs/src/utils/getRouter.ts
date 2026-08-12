// scripts/generateSidebar.ts
import fs from "fs";
import path from "path";

export function generateSidebar(routesDir: string) {
  console.log("routesDir", routesDir);
  function walk(dir: string, base = "") {
    const items: any[] = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    console.log("entries", entries);

    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      const rel = path.join(base, entry.name);

      if (entry.isDirectory()) {
        if (entry.name.startsWith("_") || ["components", "utils", "api"].includes(entry.name))
          continue;
        const sub = walk(full, rel);
        if (sub.length) {
          items.push({
            title: entry.name.replace(/[-_]/g, " "),
            collapsed: false,
            items: sub,
          });
        }
      } else if (/\.(tsx|jsx)$/.test(entry.name)) {
        const name = path.basename(entry.name, path.extname(entry.name));
        if (name.startsWith("_") || ["layout", "loading", "error", "404"].includes(name)) continue;
        let link =
          rel
            .replace(/\\/g, "/")
            .replace(/\.(tsx|jsx)$/, "")
            .replace(/\/index$/, "/")
            .replace(/\/$/, "") || "/";
        items.push({
          title: name.replace(/[-_]/g, " ").replace(/^\[|\]$/g, ""),
          link,
        });
      }
    }
    items.sort((a, b) => a.title.localeCompare(b.title));
    return items;
  }

  const data = walk(routesDir);

  console.log("data", data);
  return { "/": data.length === 1 ? data[0].items || [] : data };
}
