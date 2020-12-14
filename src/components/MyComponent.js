import React from 'react';

const user = {
  name: 'Hend',
  email: 'hend@mail.com',
  age: 25,
};

const MyComponent = () => {
  const myStyle = {
    color: 'yellow',
  };

  return (
    <div>
      <label className="name-label">Name</label>
      <h3 style={myStyle}>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.age}</p>
    </div>
  );
};

export default MyComponent;