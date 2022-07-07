// Set the menu items to an array so if we ever need to add, update or change items in the navbar, the code is right and will be easier to do so.

export const MenuItems = [
  {
      title: 'Home',
      //the link will go below and replace the '#'. 
      url: '/',
      //cName is short for 'className' as we already have 'className in react. this is imported into react.
      cName: 'nav-links'
  },
  {
      title: 'Routes',
      url: '/routes',
      cName: 'nav-links'
  },
  {
      title: 'Exercises',
      url: '#',
      cName: 'nav-links'
  },
  {
      title: 'Leaderboard',
      url: '/leaderboard',
      cName: 'nav-links'
  },
  {
      //this last item is for the mobile version of the site. this can be seen when the window is made smaller.
      title: 'Sign up',
      url: '#',
      cName: 'nav-links-mobile'
  },
]