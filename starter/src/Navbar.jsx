//* 1. Import useState and useRef hooks
//* 2. Import links and social data
//* 3. Set up state value for showLinks
//* 4. Set up linksContainerRef and linksRef with useRef()
//* 5. Set up toggleLinks function with setShowLinks and !showLinks
//* 6. Set up the linkStyles object with height property dynamically using linksRef.current.getBoundingClientRect().height
//* 7. Within return(), add nav element
//* 8. Add nav-center div
//* 9. Add nav-header div
//* 10. Add img with logo.svg
//* 11. Add button with nav-toggle class
//* 12. Add FaBars component
//* etc.

import { useState, useRef } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  }

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' className='logo' data-testid='logo' />
          <button
            className='nav-toggle'
            onClick={toggleLinks}
            data-testid='nav-toggle'
          >
            <FaBars />
          </button>
        </div>
        {/*//* The ref={linksContainerRef} attribute below is used to get the height of the links-container div */}
        <div
          className='links-container'
          ref={linksContainerRef}
          style={linkStyles}
        >
          {/*//* The ref={linksRef} attribute below is used to get the height of the links div*/}
          <ul className='links' data-testid='links-list' ref={linksRef}>
            {links.map(link => {
              const { id, url, text } = link

              return (
                <li key={id} data-testid={text}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        {/* social links */}
        <ul className='social-icons'>
          {social.map(socialIcon => {
            const { id, url, icon, iconName } = socialIcon

            return (
              <li key={id} data-testid={iconName}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
