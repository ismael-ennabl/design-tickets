// Initial demo data — Step 3 templates + sample producer rosters + agency info.

const SAMPLE_PRODUCERS = {
  commercial: [
    { id: 'p1', first: 'Morgan', last: 'Ellis',  email: 'mellis@ennabl.com',  bio: 'Morgan joined the team after 8 years at Marsh, leading mid-market manufacturing accounts.', phone: '' },
    { id: 'p2', first: 'Jordan', last: 'Taylor', email: 'jtaylor@ennabl.com', bio: 'Jordan brings over 12 years of commercial P&C experience.', phone: '+1 (555) 555-5555' },
    { id: 'p3', first: 'Casey',  last: 'Rivera', email: 'crivera@ennabl.com', bio: 'Casey spent the early part of her career underwriting at Travelers.', phone: '+1 (321) 567-8987' },
    { id: 'p4', first: 'Alex',   last: 'Nguyen', email: 'anguyen@ennabl.com', bio: 'Alex specializes in construction and real estate exposures.', phone: '' },
  ],
  benefits: [
    { id: 'b1', first: 'Priya',  last: 'Shah',    email: 'pshah@ennabl.com',    bio: 'Group health and ancillary specialist, 9+ years.', phone: '+1 (617) 555-0143' },
    { id: 'b2', first: 'Devon',  last: 'Brooks',  email: 'dbrooks@ennabl.com',  bio: 'Self-funded benefits, voluntary, and compliance.', phone: '+1 (617) 555-0911' },
    { id: 'b3', first: 'Hana',   last: 'Park',    email: 'hpark@ennabl.com',    bio: 'Account executive for Fortune 1000 employee benefits.', phone: '+1 (617) 555-0202' },
  ],
  personal: [
    { id: 'pl1', first: 'Riley',  last: 'Donovan', email: 'rdonovan@ennabl.com', bio: 'Personal lines lead, focused on high-net-worth households.', phone: '+1 (212) 555-0100' },
    { id: 'pl2', first: 'Sam',    last: 'Whitman', email: 'swhitman@ennabl.com', bio: 'Personal auto, home, and umbrella renewals.', phone: '' },
  ],
};

const AGENCY_DEFAULT = {
  agencyName: 'Clearpath Insurance Partners',
  aboutUs: "Clearpath Insurance Partners has been helping businesses and individuals navigate the complexities of risk since 2004. Headquartered in Austin, Texas, with regional offices across the Southwest, our team of over 60 dedicated professionals brings deep carrier relationships and industry-specific expertise to every client engagement. We believe insurance is more than a policy — it's a promise. Whether you're a growing startup, an established mid-market company, or a family protecting what matters most, Clearpath is committed to delivering tailored solutions with transparency, integrity, and care. We are proud to be an independent agency, which means our loyalty is always to our clients — not to any single carrier.",
  disclosures: "Clearpath Insurance Partners, LLC is a licensed insurance agency operating in all 50 states. License #TX-7741892. Clearpath may receive commissions from insurance carriers in connection with the placement of coverage. This proposal is for informational purposes only and does not bind coverage.",
  serviceSummary: "Dedicated account team with a named service representative, quarterly stewardship reviews, certificate issuance within 24 hours, and 24/7 claims advocacy.",
  logoFile: 'ennabl-icon-light (1).png',
};

const AGENCY_BENEFITS = {
  ...AGENCY_DEFAULT,
  aboutUs: "Clearpath Benefits is the employee benefits division of Clearpath Insurance Partners. Since 2012 we've focused exclusively on group health, retirement, and voluntary benefits for mid-market employers across the Southwest. Our consultants combine actuarial rigor with hands-on enrollment support so that HR teams can deliver a benefits experience employees actually use.",
  disclosures: "Clearpath Benefits, LLC is a licensed health insurance producer in TX, NM, AZ, OK, AR, and LA. Producer license numbers available upon request. Clearpath may receive commissions, bonuses, and overrides from carriers in connection with placement of coverage.",
  serviceSummary: "Open-enrollment project management, on-site or virtual employee meetings, year-round benefits advocacy line, and compliance calendar for HR.",
};

const INITIAL_TEMPLATES = [
  {
    id: 't1',
    name: 'Commercial Producers — Mid-Market',
    description: 'Default lineup for commercial P&C proposals.',
    owner: { name: 'Avery Chen', initials: 'AC', isYou: true },
    updatedAt: '2026-05-08T14:22:00Z',
    isDefault: true,
    shared: true,
    usageCount: 142,
    producers: SAMPLE_PRODUCERS.commercial,
    agency: AGENCY_DEFAULT,
  },
  {
    id: 't2',
    name: 'East Coast Benefits',
    description: 'Group health specialists serving Northeast clients.',
    owner: { name: 'Priya Shah', initials: 'PS' },
    updatedAt: '2026-04-30T09:14:00Z',
    isDefault: false,
    shared: true,
    usageCount: 38,
    producers: SAMPLE_PRODUCERS.benefits,
    agency: AGENCY_BENEFITS,
  },
  {
    id: 't3',
    name: 'Personal Lines',
    description: 'HNW personal lines team.',
    owner: { name: 'Riley Donovan', initials: 'RD' },
    updatedAt: '2026-03-12T17:00:00Z',
    isDefault: false,
    shared: true,
    usageCount: 21,
    producers: SAMPLE_PRODUCERS.personal,
    agency: AGENCY_DEFAULT,
  },
  {
    id: 't4',
    name: 'Northeast Regional',
    description: 'Pilot template — combined commercial + benefits roster.',
    owner: { name: 'Alex Nguyen', initials: 'AN' },
    updatedAt: '2026-02-28T11:30:00Z',
    isDefault: false,
    shared: false,
    usageCount: 4,
    producers: [...SAMPLE_PRODUCERS.commercial.slice(0, 2), ...SAMPLE_PRODUCERS.benefits.slice(0, 2)],
    agency: AGENCY_DEFAULT,
  },
];

function shortDate(iso) {
  const d = new Date(iso);
  const now = new Date();
  const days = Math.floor((now - d) / 86400000);
  if (days === 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function deepEqualProducers(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    const x = a[i], y = b[i];
    if (x.first !== y.first || x.last !== y.last || x.email !== y.email ||
        x.bio !== y.bio || x.phone !== y.phone) return false;
  }
  return true;
}
function deepEqualAgency(a, b) {
  return a.agencyName === b.agencyName && a.aboutUs === b.aboutUs &&
    a.disclosures === b.disclosures && a.serviceSummary === b.serviceSummary &&
    a.logoFile === b.logoFile;
}
function isStateEqualToTemplate(state, tpl) {
  if (!tpl) return true;
  return deepEqualProducers(state.producers, tpl.producers) &&
    deepEqualAgency(state.agency, tpl.agency);
}

Object.assign(window, {
  SAMPLE_PRODUCERS, AGENCY_DEFAULT, AGENCY_BENEFITS, INITIAL_TEMPLATES,
  shortDate, isStateEqualToTemplate,
});
