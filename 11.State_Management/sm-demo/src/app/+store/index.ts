import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { increment } from './actions';

interface IMainState {
  counter: number;
}

interface IAppState {
  main: IMainState;
}

const mainInitialState: IMainState = {
  counter: 0,
};

const mainReducer = createReducer<IMainState>(
  mainInitialState,
  on(increment, (state) => {
    const { counter } = state;
    return {
      ...state,
      counter: counter + 1,
    };
  })
);

export const reducers: ActionReducerMap<IAppState> = {
  main: mainReducer,
};
