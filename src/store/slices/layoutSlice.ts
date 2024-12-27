import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LayoutConfig } from '../../types';

const initialState: LayoutConfig = {
  showHeader: true,
  showFooter: true,
  showSidebar: true,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    updateLayout: (state, action: PayloadAction<Partial<LayoutConfig>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateLayout } = layoutSlice.actions;
export default layoutSlice.reducer;