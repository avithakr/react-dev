import React from 'react';
import ReactDOM from 'react-dom/client';

const count = 1112;

const Title = () => {
  return (
    <div>
      <h2>This is title component</h2>
      <span>Count : </span> <span>{count}</span> <br />
      <br />
    </div>
  );
};

const HeadingComponent = () => (
  <div>
    <h1 className="heading">Hey i am from jsx.....</h1>
    <Title />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);
