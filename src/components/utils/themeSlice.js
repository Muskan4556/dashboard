// themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: "dark",
  reducers: {
    themeToggle: (state) => (state === "light" ? "dark" : "light"),
  },
});

export const { themeToggle } = themeSlice.actions;
export default themeSlice.reducer;
