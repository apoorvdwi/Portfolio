module.exports = {
  siteTitle: 'Apoorv Dwivedi | Web Developer',
  siteDescription:
    'Apoorv Dwivedi is a sophomore from Maharaja Agrasen Institute of Technology who specializes in full stack web development.',
  siteKeywords:
    'Apoorv Dwivedi, Apoorv, Dwivedi, apoorv-dwivedi, software engineer, web developer, mait',
  siteUrl: 'https://apoorvdwivedi.live',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'G-CJZ4NM2JE1',
  googleVerification: 'todo',
  name: 'Apoorv Dwivedi',
  location: 'Delhi, India',
  email: 'apoorvd14@gmail.com',
  github: 'https://github.com/apoorvdwi',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/apoorvdwi',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/apoorvdwi/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/apoorv_dwi2506',
    },
    {
      name: 'Codechef',
      url: 'https://www.codechef.com/users/apoorvdwi2001',
    },
    {
      name: 'Blog',
      url: 'https://www.geeksforgeeks.org/todo-list-cli-application-using-node-js/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#53F79E',
    navy: '#151629',
    darkNavy: '#0C0D21',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
