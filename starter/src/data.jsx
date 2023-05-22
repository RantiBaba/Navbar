import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
    iconName: 'facebook',
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
    iconName: 'twitter',
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
    iconName: 'linkedin',
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
    iconName: 'behance',
  },
];