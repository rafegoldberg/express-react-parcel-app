import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

console.clear();

const App = () => {
  const [state, setState] = useState('Loading...');

  useEffect(() => {
    fetch('https://qr59b-8080.sse-0.codesandbox.io/api')
      .then((rsp) => rsp.json())
      .then((rsp) => setState(rsp))
      .catch((err) => console.error(err));
  }, []);

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};

render(<App />, document.getElementById('app'));
