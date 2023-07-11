import { SelectedPage } from '../shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

function Link({page, selectedPage, setSelectedPage}: Props) {
  // page is being converted from string to type of enum
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage

  return (
    <AnchorLink
    className={`${selectedPage === lowerCasePage ? "text-primary-400" : ""}
    transition duration-500 hover:text-primary-400`}
    href={`#${lowerCasePage}`}
    onClick={() => setSelectedPage(lowerCasePage)}>
        {page}
    </AnchorLink>
  )
}

export default Link