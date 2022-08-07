import { createSlice } from '@reduxjs/toolkit';

export const componentsSlice = createSlice({
  name: 'components',
  initialState: {
    currentEditComponent: '',
    settings: {}
  },
  reducers: {
    updateCurrentEditComponent: (state, action) => {
      state.currentEditComponent = action.payload;
    },
    updateSettings(state, action) {
      const { id, data } = action.payload;
      state.settings[id] = {
        ...state.settings[id],
        ...data
      };
    }
  }
});
export const { updateCurrentEditComponent, updateSettings } =
  componentsSlice.actions;

export const selectCurrentEditComponent = (state) =>
  state.components.currentEditComponent;
export const selectSettings = (state) => state.components.settings;

export default componentsSlice.reducer;
