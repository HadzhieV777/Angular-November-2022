import { createAction, props } from '@ngrx/store';

const actionTypes = {
  increment: 'INCREMENT',
  setValue: 'SET_VALUE',
  loadUsers: 'LOAD_USERS',
  loadUsersSuccess: 'LOAD_USERS_SUCCESS',
  loadUsersFailure: 'LOAD_USERS_FAILURE',
};

export const increment = createAction(actionTypes.increment);
export const setValue = createAction(actionTypes.setValue, props<{ counter: number }>());

export const loadUsers = createAction(actionTypes.loadUsers, props<{ filter?: string }>());
export const loadUsersSuccess = createAction(actionTypes.loadUsersSuccess, props<{ users: any[] }>());
export const loadUsersFailure = createAction(actionTypes.loadUsersFailure, props<{ error: any }>());