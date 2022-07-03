import React from 'react';
import styles from './App.module.scss';
import HomePage from './module/Home';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className={styles.container}>
      <HomePage />
    </div>
  );
};

export default App;
