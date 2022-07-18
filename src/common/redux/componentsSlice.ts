import { createSlice } from '@reduxjs/toolkit';

export const componentsSlice = createSlice({
  name: 'components',
  initialState: {
    currentEditComponent: ''
  },
  reducers: {
    updateCurrentEditComponent: (state, action) => {
      state.currentEditComponent = action.payload;
    }
  }
});
export const { updateCurrentEditComponent } = componentsSlice.actions;

export const selectCurrentEditComponent = (state) =>
  state.components.currentEditComponent;

export default componentsSlice.reducer;
