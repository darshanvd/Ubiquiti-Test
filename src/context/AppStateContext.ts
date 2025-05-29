import { createContext } from 'react';

export interface AppState {
  searchValue: string;
  selectedFilters: string[];
  view: 'list' | 'grid';
}

export type AppAction =
  | { type: 'SET_SEARCH'; value: string }
  | { type: 'SET_FILTERS'; value: string[] }
  | { type: 'SET_VIEW'; value: 'list' | 'grid' }
  | { type: 'SET_FILTER_COUNT'; value: number };

export const initialState: AppState = {
  searchValue: '',
  selectedFilters: [],
  view: 'list'
};

export const appReducer = (state: AppState, action: AppAction): AppState =>  {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, searchValue: action.value };
    case 'SET_FILTERS':
      return { ...state, selectedFilters: action.value };
    case 'SET_VIEW':
      return { ...state, view: action.value };
    default:
      return state;
  }
}

export const AppStateContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>({
  state: initialState,
  dispatch: () => {},
});