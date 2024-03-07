import React, { ReactNode } from 'react';
import Layout from './app/layout';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

type Props = {
  children?: ReactNode;
};
const App: React.FC<Props> = ({}) => {
  return (
    <Provider store={store}>
      <Layout>
        <Outlet />
      </Layout>
    </Provider>
  );
};

export default App;
