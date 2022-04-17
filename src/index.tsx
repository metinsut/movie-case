import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import 'styles/index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store/store';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
