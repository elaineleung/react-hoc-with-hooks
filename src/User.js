import React from 'react';

export default props => {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <p>{props.email}</p>
    </div>
  );
};
