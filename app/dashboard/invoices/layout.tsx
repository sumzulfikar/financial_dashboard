import React from 'react'

import SideNav from '../../ui/dashboard/sidenav'
function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>{children}</div>
    )
}

export default Layout;