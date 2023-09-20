import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Button, Thing } from 'mylib';

const App = () => {
  return (
    <div>
      <Thing />

      <Button onClick={() => alert('Teste Button')}>
        Botão
      </Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
