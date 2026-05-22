// Icons used across the prototype — small inline SVGs matching Ennabl's icon style
// (24×24 monochrome, currentColor, 2px stroke or filled).

const Icon = ({ children, size = 16, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

const IconCheck = (p) => <Icon {...p}><path d="M5 12.5l4 4L19 7" /></Icon>;
const IconChevronDown = (p) => <Icon {...p}><path d="M6 9l6 6 6-6" /></Icon>;
const IconChevronUp = (p) => <Icon {...p}><path d="M6 15l6-6 6 6" /></Icon>;
const IconPlus = (p) => <Icon {...p}><path d="M12 5v14M5 12h14" /></Icon>;
const IconEdit = (p) => <Icon {...p}><path d="M4 20h4l10.5-10.5a2.121 2.121 0 0 0-3-3L5 17v3z" /><path d="M13.5 6.5l4 4" /></Icon>;
const IconTrash = ({ size = 16, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={style}>
    <path d="M10.631 3C9.51243 3 8.59091 3.9357 8.59091 5.07151V5.76923H4.5V7.15385H5.86364V18.9231C5.86364 20.0643 6.78516 21 7.90909 21H16.0909C17.2148 21 18.1364 20.0643 18.1364 18.9231V7.15385H19.5V5.76923H15.4091V5.07151C15.4091 3.9357 14.4876 3 13.369 3H10.631ZM10.631 4.38462H13.369C13.7525 4.38462 14.0455 4.68209 14.0455 5.07151V5.76923H9.95455V5.07151C9.95455 4.68209 10.2475 4.38462 10.631 4.38462ZM7.22727 7.15385H16.7727V18.9231C16.7727 19.3125 16.4744 19.6154 16.0909 19.6154H7.90909C7.52557 19.6154 7.22727 19.3125 7.22727 18.9231V7.15385ZM8.59091 8.53846V18.2308H9.95455V8.53846H8.59091ZM11.3182 8.53846V18.2308H12.6818V8.53846H11.3182ZM14.0455 8.53846V18.2308H15.4091V8.53846H14.0455Z" />
  </svg>
);
const IconGear = (p) => <Icon {...p}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></Icon>;
const IconSearch = (p) => <Icon {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></Icon>;
const IconStar = ({ filled = false, size = 14, style }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none"
    stroke="currentColor" strokeWidth={filled ? 0.5 : 1.2}
    strokeLinecap="round" aria-hidden="true" style={style}>
    {filled && (
      <path
        d="M8.94297 4.83396L8.87169 2.99187C8.8589 2.66133 9.25828 2.48678 9.49218 2.72068L13.2706 6.49908C13.5045 6.73298 13.3299 7.13236 12.9994 7.11957L11.1573 7.04829C11.0445 7.04392 10.936 7.09223 10.8637 7.17902L9.41102 8.92437C9.36055 8.985 9.33117 9.06041 9.32731 9.1392L9.23269 11.0704C9.21725 11.3854 8.83542 11.5328 8.61236 11.3097L4.68155 7.3789C4.45849 7.15584 4.60581 6.774 4.92088 6.75857L6.85205 6.66395C6.93085 6.66008 7.00625 6.6307 7.06689 6.58024L8.81224 5.12751C8.89903 5.05527 8.94734 4.9468 8.94297 4.83396Z"
        fill="currentColor"
      />
    )}
    <path
      d="M6.52393 9.39399L2.61328 13.378M8.87169 2.99187L8.94297 4.83396C8.94734 4.9468 8.89903 5.05527 8.81224 5.12751L7.06689 6.58024C7.00625 6.6307 6.93085 6.66008 6.85205 6.66395L4.92088 6.75857C4.60581 6.774 4.45849 7.15584 4.68155 7.3789L8.61236 11.3097C8.83542 11.5328 9.21725 11.3854 9.23269 11.0704L9.32731 9.1392C9.33117 9.06041 9.36055 8.985 9.41102 8.92437L10.8637 7.17902C10.936 7.09223 11.0445 7.04392 11.1573 7.04829L12.9994 7.11957C13.3299 7.13236 13.5045 6.73298 13.2706 6.49908L9.49218 2.72068C9.25828 2.48678 8.8589 2.66133 8.87169 2.99187Z"
    />
  </svg>
);
const IconCopy = (p) => <Icon {...p}><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></Icon>;
const IconClose = (p) => <Icon {...p}><path d="M6 6l12 12M18 6L6 18" /></Icon>;
const IconMore = (p) => <Icon {...p}><circle cx="12" cy="5" r="1.4" fill="currentColor" stroke="none" /><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" /><circle cx="12" cy="19" r="1.4" fill="currentColor" stroke="none" /></Icon>;
const IconShare = (p) => <Icon {...p}><circle cx="18" cy="5" r="2.5" /><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="19" r="2.5" /><path d="M8.2 10.7l7.6-4.4M8.2 13.3l7.6 4.4" /></Icon>;
const IconExternal = (p) => <Icon {...p}><path d="M9 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" /><path d="M14 4h6v6" /><path d="M10 14L20 4" /></Icon>;
const IconRevert = (p) => <Icon {...p}><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /></Icon>;
const IconUsers = (p) => <Icon {...p}><circle cx="9" cy="8" r="3.5" /><path d="M2 20c.5-3.5 3.5-6 7-6s6.5 2.5 7 6" /><path d="M17 11a3 3 0 1 0 0-6" /><path d="M22 20c-.3-2.4-1.9-4.4-4-5.4" /></Icon>;
const IconInfo = (p) => <Icon {...p}><circle cx="12" cy="12" r="9" /><path d="M12 11v5" /><circle cx="12" cy="8" r="0.6" fill="currentColor" stroke="none" /></Icon>;
const IconUpload = (p) => <Icon {...p}><path d="M12 16V4" /><path d="M7 9l5-5 5 5" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" /></Icon>;

// Filled variants for menu items (match the supplied SVGs)
const IconEditFill = ({ size = 16, style }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" style={style}>
    <path d="M12.2031 1.004C11.8789 1.0079 11.5547 1.1329 11.3125 1.3829L6.64844 6.12509L5.95312 9.04697L8.875 8.35166L8.97656 8.25791L13.6211 3.68759C14.1172 3.20322 14.125 2.38681 13.6289 1.89462L13.1055 1.36728C12.8594 1.12119 12.5312 1.00009 12.2031 1.004ZM12.2109 1.99619C12.2773 1.99619 12.3438 2.02353 12.3984 2.07822L12.9219 2.60165C13.0312 2.70712 13.0312 2.86728 12.9219 2.97665L8.375 7.4454L7.29688 7.70322L7.55469 6.62509L12.0273 2.07822C12.0781 2.02353 12.1445 1.99619 12.2109 1.99619ZM3 2.00009C1.89453 2.00009 1 2.89462 1 4.00009V12.0001C1 13.1056 1.89453 14.0001 3 14.0001H11C12.1055 14.0001 13 13.1056 13 12.0001V5.70322L12 6.68759V12.0001C12 12.5509 11.5508 13.0001 11 13.0001H3C2.44922 13.0001 2 12.5509 2 12.0001V4.00009C2 3.44931 2.44922 3.00009 3 3.00009H8.32031L9.30469 2.00009H3Z" fill="currentColor" />
  </svg>
);
const IconTrashFill = ({ size = 16, style }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" style={style}>
    <path d="M7.08736 2C6.34162 2 5.72727 2.6238 5.72727 3.38101V3.84615H3V4.76923H3.90909V12.6154C3.90909 13.3762 4.52344 14 5.27273 14H10.7273C11.4766 14 12.0909 13.3762 12.0909 12.6154V4.76923H13V3.84615H10.2727V3.38101C10.2727 2.6238 9.65838 2 8.91264 2H7.08736ZM7.08736 2.92308H8.91264C9.16832 2.92308 9.36364 3.12139 9.36364 3.38101V3.84615H6.63636V3.38101C6.63636 3.12139 6.83168 2.92308 7.08736 2.92308ZM4.81818 4.76923H11.1818V12.6154C11.1818 12.875 10.983 13.0769 10.7273 13.0769H5.27273C5.01705 13.0769 4.81818 12.875 4.81818 12.6154V4.76923ZM5.72727 5.69231V12.1538H6.63636V5.69231H5.72727ZM7.54545 5.69231V12.1538H8.45455V5.69231H7.54545ZM9.36364 5.69231V12.1538H10.2727V5.69231H9.36364Z" fill="currentColor" />
  </svg>
);

Object.assign(window, {
  IconCheck, IconChevronDown, IconChevronUp, IconPlus, IconEdit, IconTrash,
  IconGear, IconSearch, IconStar, IconCopy, IconClose, IconMore, IconShare,
  IconExternal, IconRevert, IconUsers, IconInfo, IconUpload,
  IconEditFill, IconTrashFill,
});
