import React from 'react';
import styles from './App.module.scss';
import HomePage from './modules/Home';
import DesignPage from '@/modules/Design';
import { Provider } from 'react-redux';
import store from '@/common/redux/store';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        {/*<HomePage />*/}
        <DesignPage />
      </div>
    </Provider>
  );
};

export default App;
