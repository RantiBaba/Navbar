//* This file was created just so that John Smilga can show example of why a Navbar link container
//* is required for Navbar links. The Navbar component is copied into this file.
//* See video tutorial '247. Navbar - Question' in the course - React 18 Tutorial and Projects Course (2023).

import { useState, useRef } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
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

        <ul
          className='links'
          data-testid='links-list'
          ref={linksRef}
          style={linkStyles}
        >
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
    </nav>
  )
}
export default Navbar
