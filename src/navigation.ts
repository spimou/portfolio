export interface NavItem {
  label: string
  to: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Projects', to: '/#projects' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Prototypes', to: '/poc' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/#contact' },
]

// Keep in sync with the <title> in index.html
const SITE_TITLE = 'Spiros Mousouris, PhD Software Dev & GeoData Viz'

// Pages that have their own title but no entry in the nav
const OTHER_PAGES: NavItem[] = [{ label: 'Excavation Inspector', to: '/excavation' }]

export function getPageTitle(pathname: string, hash: string): string {
  const path = pathname.replace(/(.)\/+$/, '$1')
  const page = [...NAV_ITEMS, ...OTHER_PAGES].find((item) => item.to === `${path}${hash}`)
    // an unknown hash still belongs to its page
    ?? [...NAV_ITEMS, ...OTHER_PAGES].find((item) => item.to === path)

  return page ? `${page.label} | ${SITE_TITLE}` : SITE_TITLE
}
