import {Action, ActionReducer, createReducer, on} from '@ngrx/store';
import {homePageLoad} from '../actions';

export const homePageFeatureKey = 'HomePage';

export interface HomePageState {
  appName: string;
}

export const initialState: HomePageState = {
  appName: ''
};

const homePageReducer: ActionReducer<HomePageState> = createReducer(
  initialState,
  on(homePageLoad, (state: HomePageState, action: { appName: string }) => ({
    ...state,
    appName: action.appName
  }))
);

export const reducer = (state: HomePageState | undefined, action: Action): HomePageState => homePageReducer(state, action);
