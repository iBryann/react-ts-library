import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Button, Switch, Thing } from 'mylib';

const App = () => {
  return (
    <div>
      <Thing />

      <div>
        <Switch />
      </div>

      <Button onClick={() => alert('Teste Button')}>
        Botão
      </Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
