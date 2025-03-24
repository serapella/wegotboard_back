import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Rootstate } from "../store";

type SortState = {
  selectedSort: string;
};

const initialState: SortState = {
  selectedSort: "",
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSelectedSort: (state, action: PayloadAction<string>) => {
      state.selectedSort = action.payload;
    },
  },
});

export const { setSelectedSort } = sortSlice.actions;
export default sortSlice.reducer;
