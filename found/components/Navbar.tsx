import React from 'react'


const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
         <a href='/' className="btn btn-ghost normal-case text-xl">FOUND</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><a>List Item</a></li>
                <li><a>Search Item</a></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar