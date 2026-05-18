#!/usr/bin/env node
// Rebuilds index.html from whatever folders exist in designs/
const fs = require("fs");
const path = require("path");

const configPath = path.join(__dirname, ".design-config");
let ghUser = "ismael-ennabl";
let ghRepo = "design-tickets";

if (fs.existsSync(configPath)) {
  const cfg = fs.readFileSync(configPath, "utf8");
  const userMatch = cfg.match(/GH_USER=(.+)/);
  const repoMatch = cfg.match(/GH_REPO=(.+)/);
  if (userMatch) ghUser = userMatch[1].trim();
  if (repoMatch) ghRepo = repoMatch[1].trim();
}

const designsDir = path.join(__dirname, "designs");
const tickets = fs.existsSync(designsDir)
  ? fs.readdirSync(designsDir).filter((d) =>
      fs.statSync(path.join(designsDir, d)).isDirectory() &&
      !d.startsWith("_")
    )
  : [];

const rows = tickets
  .sort()
  .map((id) => {
    const url = `https://${ghUser}.github.io/${ghRepo}/designs/${id}/`;
    return `      <tr>
        <td><a href="designs/${id}/">${id}</a></td>
        <td><a href="${url}" target="_blank">${url}</a></td>
      </tr>`;
  })
  .join("\n");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Design Pages</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 860px; margin: 48px auto; padding: 0 24px; color: #111; }
    h1 { font-size: 1.4rem; margin-bottom: 24px; }
    table { width: 100%; border-collapse: collapse; }
    th { text-align: left; padding: 8px 12px; border-bottom: 2px solid #e5e7eb; font-size: 0.8rem; text-transform: uppercase; letter-spacing: .05em; color: #6b7280; }
    td { padding: 10px 12px; border-bottom: 1px solid #f3f4f6; font-size: 0.9rem; }
    tr:hover td { background: #f9fafb; }
    a { color: #2563eb; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .empty { color: #9ca3af; font-size: 0.9rem; margin-top: 24px; }
  </style>
</head>
<body>
  <h1>Design Pages</h1>
  ${
    tickets.length === 0
      ? '<p class="empty">No designs published yet. Run <code>./publish.sh TICKET-ID file.html</code> to add one.</p>'
      : `<table>
    <thead><tr><th>Ticket</th><th>Public URL</th></tr></thead>
    <tbody>
${rows}
    </tbody>
  </table>`
  }
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, "index.html"), html);
console.log(`Index rebuilt — ${tickets.length} design(s) listed.`);
