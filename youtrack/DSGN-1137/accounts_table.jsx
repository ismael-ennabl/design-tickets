// Mock accounts table — 25 rows.

const ACCOUNT_NAMES = [
  'Northwind Manufacturing', 'Bluebird Logistics', 'Harbor & Stone Holdings', 'Cedar Ridge Vineyards',
  'Granite Peak Construction', 'Atlas Foods Group', 'Westline Healthcare', 'Pinecrest Realty Trust',
  'Skylark Aviation', 'Magnolia Hospitality', 'Ironclad Security', 'Beacon Pharmaceuticals',
  'Tidewater Marine Services', 'Summit Architects', 'Roselawn Senior Living', 'Vantage Capital Advisors',
  'Copperleaf Engineering', 'Mainsail Beverage Co.', 'Lumen Energy Partners', 'Foxglove Bakeries',
  'Sterling Wealth Group', 'Driftwood Surfwear', 'Heron Bay Resorts', 'Quill & Press Publishing',
  'Anchor Point Insurance',
];

function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function genRows() {
  return ACCOUNT_NAMES.map((name, i) => {
    const products = Math.floor(seededRandom(i * 1.3 + 1) * 14) + 2;            // 2..15
    const policies = Math.floor(seededRandom(i * 4.1 + 9) * 30) + products;     // products..products+30
    const premium = Math.floor(seededRandom(i * 2.7 + 3) * 4_800_000) + 120_000; // $120k..$5M
    const commissionRate = 0.08 + seededRandom(i * 3.1 + 7) * 0.07;             // 8%..15%
    const revenue = Math.round(premium * commissionRate);
    return { id: 'acc' + (i + 1), name, products, policies, premium, revenue, commissionRate };
  });
}

const ACCOUNT_ROWS = genRows();

function fmtMoney(n) {
  return '$' + n.toLocaleString('en-US');
}

function AccountsTable() {
  const [sort, setSort] = useState({ key: 'name', dir: 'asc' });
  const [tip, setTip] = useState(null);

  const toggleSort = (key) => {
    setSort(s => {
      if (s.key !== key) return { key, dir: 'asc' };
      if (s.dir === 'asc') return { key, dir: 'desc' };
      if (s.dir === 'desc') return { key: null, dir: 'none' };
      return { key, dir: 'asc' };
    });
  };
  const dirFor = (k) => (sort.key === k ? sort.dir : 'none');

  const sorted = useMemo(() => {
    if (!sort.key || sort.dir === 'none') return ACCOUNT_ROWS;
    const arr = [...ACCOUNT_ROWS];
    const k = sort.key;
    arr.sort((a, b) => {
      const av = a[k], bv = b[k];
      if (typeof av === 'number') return sort.dir === 'asc' ? av - bv : bv - av;
      const A = (av || '').toString().toLowerCase();
      const B = (bv || '').toString().toLowerCase();
      if (A < B) return sort.dir === 'asc' ? -1 : 1;
      if (A > B) return sort.dir === 'asc' ? 1 : -1;
      return 0;
    });
    return arr;
  }, [sort]);

  const onCellEnter = (e, text) => {
    if (!text) return;
    const el = e.currentTarget;
    if (el.scrollWidth <= el.clientWidth + 1) return;
    setTip({ text, x: e.clientX, y: e.clientY });
  };
  const onCellMove = (e) => setTip(t => t ? { ...t, x: e.clientX, y: e.clientY } : t);
  const onCellLeave = () => setTip(null);

  const totals = useMemo(() => {
    const products = ACCOUNT_ROWS.reduce((s, r) => s + r.products, 0);
    const policies = ACCOUNT_ROWS.reduce((s, r) => s + r.policies, 0);
    const premium  = ACCOUNT_ROWS.reduce((s, r) => s + r.premium, 0);
    const revenue  = ACCOUNT_ROWS.reduce((s, r) => s + r.revenue, 0);
    const avgCommission = premium > 0 ? revenue / premium : 0;
    return { products, policies, premium, revenue, avgCommission };
  }, []);

  return (
    <>
    <table className="table accounts-table">
      <thead>
        <tr>
          <th className="col-acc-name" onClick={() => toggleSort('name')}>
            <span className="th-inner sortable">Account Name <span className="sort"><SortIcon dir={dirFor('name')} /></span></span>
          </th>
          <th className="col-acc-products num" onClick={() => toggleSort('products')}>
            <span className="th-inner sortable">Products <span className="sort"><SortIcon dir={dirFor('products')} /></span></span>
          </th>
          <th className="col-acc-policies num" onClick={() => toggleSort('policies')}>
            <span className="th-inner sortable">Policies <span className="sort"><SortIcon dir={dirFor('policies')} /></span></span>
          </th>
          <th className="col-acc-premium num" onClick={() => toggleSort('premium')}>
            <span className="th-inner sortable">Premium <span className="sort"><SortIcon dir={dirFor('premium')} /></span></span>
          </th>
          <th className="col-acc-revenue num" onClick={() => toggleSort('revenue')}>
            <span className="th-inner sortable">Revenue <span className="sort"><SortIcon dir={dirFor('revenue')} /></span></span>
          </th>
          <th className="col-acc-commission num" onClick={() => toggleSort('commissionRate')}>
            <span className="th-inner sortable">Avg Commission <span className="sort"><SortIcon dir={dirFor('commissionRate')} /></span></span>
          </th>
        </tr>
      </thead>
      <tbody>
        {sorted.map(r => (
          <tr key={r.id}>
            <td onMouseEnter={(e) => onCellEnter(e, r.name)} onMouseMove={onCellMove} onMouseLeave={onCellLeave}>{r.name}</td>
            <td className="num">{r.products}</td>
            <td className="num">{r.policies}</td>
            <td className="num">{fmtMoney(r.premium)}</td>
            <td className="num">{fmtMoney(r.revenue)}</td>
            <td className="num">{(r.commissionRate * 100).toFixed(1)}%</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className="totals-label">Totals · {ACCOUNT_ROWS.length} accounts</td>
          <td className="num">{totals.products.toLocaleString()}</td>
          <td className="num">{totals.policies.toLocaleString()}</td>
          <td className="num">{fmtMoney(totals.premium)}</td>
          <td className="num">{fmtMoney(totals.revenue)}</td>
          <td className="num">{(totals.avgCommission * 100).toFixed(1)}%</td>
        </tr>
      </tfoot>
    </table>
    {tip && (
      <div className="cell-tip" style={{ left: tip.x + 14, top: tip.y + 18 }}>{tip.text}</div>
    )}
    </>
  );
}

Object.assign(window, { AccountsTable, ACCOUNT_ROWS });
