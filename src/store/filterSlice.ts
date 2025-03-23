import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  categories: {
    [key: string]: boolean;
  };
  priceRange: {
    min: number;
    max: number;
  };
  playerCount: {
    [key: string]: boolean;
  };
  duration: {
    [key: string]: boolean;
  };
  difficulty: {
    [key: string]: boolean;
  };
  age: string;
  isFilterVisible: boolean;
}

const initialState: FilterState = {
  categories: {
    "board-games": false,
    "card-games": false,
    "dice-games": false,
  },
  priceRange: {
    min: 0,
    max: 200,
  },
  playerCount: {
    players_1: false,
    players_2: false,
    "players_3-5": false,
    "players_6+": false,
    "players_10+": false,
  },
  duration: {
    short: false,
    medium: false,
    long: false,
  },
  difficulty: {
    easy: false,
    medium: false,
    hard: false,
  },
  age: "All Ages",
  isFilterVisible: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleCategory: (state, action: PayloadAction<string>) => {
      state.categories[action.payload] = !state.categories[action.payload];
    },
    setPriceRange: (
      state,
      action: PayloadAction<{ min: number; max: number }>
    ) => {
      state.priceRange = action.payload;
    },
    togglePlayerCount: (state, action: PayloadAction<string>) => {
      state.playerCount[action.payload] = !state.playerCount[action.payload];
    },
    toggleDuration: (state, action: PayloadAction<string>) => {
      state.duration[action.payload] = !state.duration[action.payload];
    },
    toggleDifficulty: (state, action: PayloadAction<string>) => {
      state.difficulty[action.payload] = !state.difficulty[action.payload];
    },
    setAge: (state, action: PayloadAction<string>) => {
      state.age = action.payload;
    },
    toggleFilterVisibility: (state) => {
      state.isFilterVisible = !state.isFilterVisible;
    },
  },
});

export const {
  toggleCategory,
  setPriceRange,
  togglePlayerCount,
  toggleDuration,
  toggleDifficulty,
  setAge,
  toggleFilterVisibility,
} = filterSlice.actions;

export default filterSlice.reducer;
