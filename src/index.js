import React    from 'react';
import ReactDOM from 'react-dom';

import App                from './App';
import * as serviceWorker from './serviceWorker';

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp);
}

renderApp();


serviceWorker.unregister();
