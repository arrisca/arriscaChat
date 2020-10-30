import {createAction, props} from '@ngrx/store';

export const homePageLoad = createAction(
  '[Home Page] HomePageLoad',
  props<{ appName: string }>()
);
