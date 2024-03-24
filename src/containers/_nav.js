export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    className: "dashboard"
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Employee Management',
    route: '/employee-management',
    className: "employee-management",
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Employee Registration',
        to: '/employee-management/employee-register',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Employee List',
        to: '/employee-management/employee-list',
      }
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Admin Register and List',
    to: '/admin-management/admin-reg-list',
    className: "admin"
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Logout',
    to: '/logout',
    className: "logout"
  },
 
 
]

