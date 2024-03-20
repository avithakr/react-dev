const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement(
      'h1',
      { id: 'heading', key: 'heading' },
      'Hey I Am H1 Tag...!'
    ),
    React.createElement('p', { key: 'para' }, 'lorem .....'),
  ])
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
