// 打包生产的时候可以把logger去掉
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import componentsReducer from '@/common/redux/componentsSlice';

const store = configureStore({
  middleware: process.env.NODE_ENV === 'development' ? [logger] : [],
  reducer: {
    components: componentsReducer
  }
});

export default store;
