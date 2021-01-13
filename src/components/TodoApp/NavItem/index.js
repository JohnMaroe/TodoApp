import React from 'react';

function NavItem({ children }) {
  return (
    <div>
      <li>
        {children}
      </li>
    </div>
  );
}

export default NavItem;