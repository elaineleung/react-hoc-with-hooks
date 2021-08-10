import React, { useState, useEffect } from 'react';

const AllUsers = props => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users/';
    fetch(url)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const Component = props.component;

  return <Component users={users} {...props} />;
};

export function WithAllUsers(component) {
  return props => {
    return <AllUsers component={component} {...props} />;
  };
}
