# Figma Reference — ennabl UI Kit

> Read this file before any `use_figma` call on a DSGN ticket.
> Both ennabl libraries are pre-added to all DSGN Figma files.
> **Never hardcode hex values — always import styles via key.**

---

## Workflow goal

The end goal is **clean Figma screens generated from code** — not hand-drawn mockups.
- Reuse ennabl UI Kit styles (fill, text, stroke) via `importStyleByKeyAsync`
- Reuse existing Figma components where possible
- `_design_system/` in the repo is the source of truth for tokens, icons, logos, fonts
- `_shared/` holds React/JSX components (picker, dialogs, step3, icons)

---

## Required `S` styles object — import once per script

```js
const STYLE_KEYS = {
  bgGrey:        '43c414a1c05e0f596d287e9b6256210991d8e94a',
  bgWhite:       '01230e02e21fe638853b57100fea2dda051abaec',
  textPrimary:   '1a5a26e1aec5d2820047136d2650177d2fe44b02',
  textSecondary: '310561ab85cecd31b1558005ff6b5d3901d43ec5',
  sidenav:       '510faecb59b8d31d4dfba49b49e200e92d179c19',
  tableHeader:   '974898d773c6657070e382e8354f5d252a32958e',
  tableText:     '450f43b6c2f7295b2031409f8aad05d7631e4897',
};
const S = {};
for (const [k, v] of Object.entries(STYLE_KEYS)) S[k] = await figma.importStyleByKeyAsync(v);
```

---

## Fill Styles

| Use case | Style name | Key |
|----------|-----------|-----|
| Page / step-card background (grey) | `Light/Background/Grey` | `43c414a1c05e0f596d287e9b6256210991d8e94a` |
| Card / panel / white surface | `Light/Background/White` | `01230e02e21fe638853b57100fea2dda051abaec` |
| Dividers, separators | `Light/Background/Dark Grey` | `30f1a0bdbd5f2bcb141cf4f5e4e1ce27f05d86be` |
| Primary button / active badge | `Light/Primary/Main` | `30b5950a32891a741e155a0c7328e5d2657cb487` |
| Primary button bg light | `Light/Primary/Light` | `d8703b1919cde91310273543a76718d04a80fd2d` |
| Primary contrast (text on primary) | `Light/Primary/Contrast` | `9c1c99cdddf5b6dd793aef3fd9613293d27bd5d4` |
| Primary hover/focus overlay | `Light/Primary/Main_8p` | `8ac59a2c9a73928f240d019cd7f9f08e8d772ed4` |
| Primary text color | `Light/Text/Primary` | `1a5a26e1aec5d2820047136d2650177d2fe44b02` |
| Secondary text / muted | `Light/Text/Secondary` | `310561ab85cecd31b1558005ff6b5d3901d43ec5` |
| Disabled text | `Light/Text/Disabled` | `937e3a00e9df742458e97a49654ff3f5fbabd9eb` |
| Icon / sidenav / column-header tint | `Sidenav/Default` | `510faecb59b8d31d4dfba49b49e200e92d179c19` |
| White on dark | `Light/Common/White` | `e7a338db19ea0f67b56a0f7f2085577cb10b7fc0` |
| Error/destructive | `Light/Error/Main` | `1aa6bda945f3df8f04050992d4bfa596a8356fe5` |
| Common divider stroke | `Light/Common/Divider` | `3aa2bcd298104437268d56c099e9b2e1da5b46ce` |

## Text Styles

| Use case | Style name | Key |
|----------|-----------|-----|
| Step / screen title | `Typography/Subtitle 1` | `a98795319832734a34bf24c8d23c1d04772ded68` |
| Section header / label | `Typography/Subtitle 2` | `ad015fe6810515add21c6173e39f8f0651f73895` |
| Sub-section header | `Typography/Subtitle 3` | `aeb76989a83dc6c268489819539e0a48bc28fe3f` |
| Body / form labels / description | `Typography/Body 1` | `06610964f383f5bc5f718f0569c291d5ef205e06` |
| Small body / helper text | `Typography/Body 2` | `240d1b5907d0fac5cca9f9e1f9c12d50f25ea27c` |
| Tiny body / captions | `Typography/Body 3` | `2b5b1cc4f7be76db1a60d2efdb151f50d611e001` |
| Bold body | `Typography/Body 1 Bold` | `064ff6fe76710cd465e7f8dc2dba3dda52c6a9ee` |
| Bold small body | `Typography/Body 2 Bold` | `e343932f5b7b29f87bec60fd2b08b68cadef946a` |
| Overline / tag / badge label | `Typography/Overline Regular` | `345d00b9f6a8018a9e474b2586c906883765559c` |
| Table column header | `Table/Header` | `974898d773c6657070e382e8354f5d252a32958e` |
| Table cell text | `Table/Text` | `450f43b6c2f7295b2031409f8aad05d7631e4897` |

## CSS → Figma style mapping

| CSS value | Figma style |
|-----------|------------|
| `#F4F6FC` | `Light/Background/Grey` |
| `#FFFFFF` | `Light/Background/White` |
| `#E1E6F2` | `Light/Background/Dark Grey` |
| `#0000C5` | `Light/Primary/Main` |
| `#1E1E1E` full opacity | `Light/Text/Primary` |
| `rgba(30,30,30,0.70)` | `Light/Text/Secondary` |
| `#8287B0` | `Sidenav/Default` |

---

## Step Card — standard layout

```js
const divider = await figma.importStyleByKeyAsync('3aa2bcd298104437268d56c099e9b2e1da5b46ce');
const bgWhite  = await figma.importStyleByKeyAsync('01230e02e21fe638853b57100fea2dda051abaec');

stepCard.layoutMode            = 'VERTICAL';
stepCard.primaryAxisSizingMode = 'AUTO';   // hug height — never fix the height
stepCard.counterAxisSizingMode = 'FIXED';
stepCard.counterAxisAlignItems = 'MIN';
stepCard.itemSpacing   = 16;
stepCard.paddingTop    = 24;
stepCard.paddingRight  = 24;
stepCard.paddingBottom = 24;
stepCard.paddingLeft   = 24;
stepCard.fillStyleId   = bgWhite.id;   // never hardcode #FFFFFF
stepCard.strokeStyleId = divider.id;
stepCard.strokeWeight  = 1;
stepCard.cornerRadius  = 16;

for (const child of stepCard.children) {
  if ('layoutSizingHorizontal' in child) child.layoutSizingHorizontal = 'FILL';
  if ('layoutSizingVertical'   in child) child.layoutSizingVertical   = 'FIXED';
}
```

> **Rule:** Never set `node.fills` when using `fillStyleId` — it clears the style binding.

---

## `buildTable` — drop-in helper

```js
// cols: [{ label, width, align }]  width: null = FILL, number = fixed px
// rows: string[][] matching col count
// totals: string[] (optional) — grey totals row at the bottom
// S: pre-imported styles object (see above)
// Returns the table FrameNode (appended to parent, FILL-width)

async function buildTable(parent, { cols, rows, totals, S }) {
  const DIV   = { r: 225/255, g: 230/255, b: 242/255 };
  const ROW_H = 40, HDR_H = 44, PAD = 32;

  const table = figma.createAutoLayout('VERTICAL', {
    name: 'Data Table', itemSpacing: 0,
    paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0,
    clipsContent: true,
  });
  table.primaryAxisSizingMode = 'AUTO';
  table.counterAxisSizingMode = 'FIXED';
  table.resize(parent.width, 100);
  table.cornerRadius = 16;
  table.strokeStyleId = (await figma.importStyleByKeyAsync('3aa2bcd298104437268d56c099e9b2e1da5b46ce')).id;
  table.strokeWeight  = 1;
  parent.appendChild(table);
  table.layoutSizingHorizontal = 'FILL';

  function addRow(vals, isHeader, isTotal) {
    const h = (isHeader || isTotal) ? HDR_H : ROW_H;
    const row = figma.createAutoLayout('HORIZONTAL', {
      name: isHeader ? 'Header Row' : isTotal ? 'Totals Row' : 'Data Row',
      itemSpacing: 0, paddingLeft: PAD, paddingRight: PAD,
      paddingTop: 0, paddingBottom: 0, counterAxisAlignItems: 'CENTER',
    });
    row.primaryAxisSizingMode = 'FIXED';
    row.counterAxisSizingMode = 'FIXED';
    row.resize(parent.width, h);
    row.fillStyleId = (isHeader || isTotal) ? S.bgGrey.id : S.bgWhite.id;
    row.strokes = [{ type: 'SOLID', color: DIV }];
    row.strokeTopWeight = 0; row.strokeLeftWeight = 0; row.strokeRightWeight = 0;
    row.strokeBottomWeight = isTotal ? 0 : 1;
    row.strokeAlign = 'INSIDE';

    for (let i = 0; i < cols.length; i++) {
      const col = cols[i];
      const t   = figma.createText();
      t.characters = String(vals[i]);
      t.textStyleId = isHeader ? S.tableHeader.id : S.tableText.id;
      t.fillStyleId = isHeader ? S.sidenav.id
        : (i === 0 || isTotal) ? S.textPrimary.id : S.textSecondary.id;
      t.textAlignHorizontal = col.align || 'LEFT';
      if (col.width) t.resize(col.width, h);
      row.appendChild(t);
      t.layoutSizingHorizontal = col.width ? 'FIXED' : 'FILL';
      t.layoutSizingVertical   = 'FILL';
      t.textAlignVertical      = 'CENTER';
    }
    table.appendChild(row);
    row.layoutSizingHorizontal = 'FILL';
  }

  addRow(cols.map(c => c.label), true, false);
  for (const r of rows) addRow(r, false, false);
  if (totals) addRow(totals, false, true);
  return table;
}
```

### Usage

```js
const table = await buildTable(stepCard, {
  cols: [
    { label: 'Account Name ↕', width: null, align: 'LEFT'  },
    { label: 'Products ↕',     width: 120,  align: 'RIGHT' },
    { label: 'Premium ↕',      width: 160,  align: 'RIGHT' },
    { label: 'Revenue ↕',      width: 160,  align: 'RIGHT' },
  ],
  rows: [
    ['Northwind Manufacturing', '4', '$1,842,300', '$249,311'],
  ],
  totals: ['Totals · 25 accounts', '119', '$31,171,400', '$4,301,749'],
  S,
});
```

---

## Standard container sizing

| Element | `cornerRadius` | Stroke | Fill |
|---------|---------------|--------|------|
| Step Card / panel | `16` | `Light/Common/Divider` 1px | `Light/Background/White` |
| Data table frame | `16` | `Light/Common/Divider` 1px | none (rows carry fills) |
