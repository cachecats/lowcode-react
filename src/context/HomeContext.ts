import { createContext } from 'react';

export interface HomeContextProps {
  droppedComponents: any;
}

const defaultValues = {
  droppedComponents: ''
};

const HomeContext = createContext<HomeContextProps>(defaultValues);
export default HomeContext;
