import React, { useState } from 'react';

export default () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
    document.body.classList.toggle('nav-open');
  };
  return (
    <button className="nav-toggle" onClick={handleToggle}>
      <span className="hamburger" />
    </button>
  );
};
