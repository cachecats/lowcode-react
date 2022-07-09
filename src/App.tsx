import React from 'react';
import styles from './App.module.scss';
import HomePage from './modules/Home';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className={styles.container}>
      <HomePage />
      {/*<DesignPage />*/}
    </div>
  );
};

export default App;
