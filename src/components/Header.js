import React from 'react';

function Header({ blogName }) {
  return (
    <div className="Header">
      <h1>{blogName}</h1>
    </div>
  );
}

export default Header;
