import { createSlice } from "@reduxjs/toolkit";
export interface Sidebar {
  showSidebar: boolean;
  windowWidth: number;
}
const initialState = {
  showSidebar: false,
  windowWidth: window.innerWidth,
} as Sidebar;

const showSidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar(state, action) {
      state.showSidebar = action.payload;
    },
  },
});

export const { toggleSidebar } = showSidebarSlice.actions;
export default showSidebarSlice.reducer;
