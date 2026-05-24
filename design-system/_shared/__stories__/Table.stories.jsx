import React, { useState } from 'react';

const ChevronDown = () => <svg width="12" height="12" viewBox="0 0 256 256" fill="currentColor"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/></svg>;
const ChevronUp   = () => <svg width="12" height="12" viewBox="0 0 256 256" fill="currentColor"><path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"/></svg>;
const IconEdit    = () => <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor"><path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"/></svg>;
const IconTrash   = () => <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"/></svg>;

const SAMPLE = [
  { id: 1, name: 'Acme Corp',        producer: 'Sarah Chen',   premium: '$142,000', status: 'active',  updated: 'May 20' },
  { id: 2, name: 'Blue Ridge LLC',   producer: 'Tom Walsh',    premium: '$98,500',  status: 'pending', updated: 'May 19' },
  { id: 3, name: 'Harbor Freight',   producer: 'Lisa Park',    premium: '$210,000', status: 'active',  updated: 'May 18' },
  { id: 4, name: 'Meridian Group',   producer: 'James Liu',    premium: '$67,200',  status: 'overdue', updated: 'May 10' },
  { id: 5, name: 'Pinnacle Partners',producer: 'Ana Reyes',    premium: '$325,000', status: 'active',  updated: 'May 21' },
];

const STATUS_COLOR = { active: 'badge-success', pending: 'badge-warning', overdue: 'badge-error' };

function SortableTable() {
  const [sortKey, setSortKey] = useState('name');
  const [sortDir, setSortDir] = useState('asc');

  function handleSort(key) {
    if (key === sortKey) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDir('asc'); }
  }

  const sorted = [...SAMPLE].sort((a, b) => {
    const v = a[sortKey] < b[sortKey] ? -1 : a[sortKey] > b[sortKey] ? 1 : 0;
    return sortDir === 'asc' ? v : -v;
  });

  function SortIcon({ col }) {
    if (sortKey !== col) return <span style={{ opacity: 0.3 }}><ChevronDown /></span>;
    return sortDir === 'asc' ? <ChevronUp /> : <ChevronDown />;
  }

  const cols = [
    { key: 'name',     label: 'Account',  sortable: true, width: '28%' },
    { key: 'producer', label: 'Producer', sortable: true, width: '20%' },
    { key: 'premium',  label: 'Premium',  sortable: true, width: '16%' },
    { key: 'status',   label: 'Status',   sortable: false },
    { key: 'updated',  label: 'Updated',  sortable: true, width: '12%' },
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          {cols.map(col => (
            <th key={col.key} style={col.width ? { width: col.width } : undefined}>
              <div className={`th-inner${col.sortable ? ' sortable' : ''}`} onClick={() => col.sortable && handleSort(col.key)}>
                {col.label}
                {col.sortable && <span className="sort"><SortIcon col={col.key} /></span>}
              </div>
            </th>
          ))}
          <th style={{ width: 80 }} />
        </tr>
      </thead>
      <tbody>
        {sorted.map(row => (
          <tr key={row.id}>
            <td style={{ fontWeight: 500 }}>{row.name}</td>
            <td>{row.producer}</td>
            <td>{row.premium}</td>
            <td>
              <span className={`badge ${STATUS_COLOR[row.status]}`} style={{ textTransform: 'capitalize' }}>
                {row.status}
              </span>
            </td>
            <td style={{ color: 'var(--en-fg-secondary)' }}>{row.updated}</td>
            <td className="col-actions">
              <div className="cell-actions">
                <button className="btn-icon"><IconEdit /></button>
                <button className="btn-icon"><IconTrash /></button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function EmptyTable() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th><div className="th-inner">Account</div></th>
          <th><div className="th-inner">Producer</div></th>
          <th><div className="th-inner">Status</div></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={3} style={{ padding: 0, borderBottom: 0 }}>
            <div className="table-empty">
              No accounts match your filters.
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function Demo() {
  return (
    <div style={{ padding: 32, background: 'var(--en-bg-grey)', minHeight: '100vh' }}>
      <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--en-fg-secondary)', marginBottom: 16 }}>
        Sortable table with row actions
      </p>
      <SortableTable />

      <p style={{ fontFamily: 'var(--en-font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--en-fg-secondary)', margin: '40px 0 16px' }}>
        Empty state
      </p>
      <EmptyTable />
    </div>
  );
}

export default {
  title: 'Design System/UI Primitives/Table',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export const AllVariants = { render: () => <Demo /> };
