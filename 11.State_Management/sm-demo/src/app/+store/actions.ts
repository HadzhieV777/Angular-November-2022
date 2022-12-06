import { createAction } from "@ngrx/store"

 const actionTypes = {
    increment:  'INCREMENT',
}

export const increment = createAction(actionTypes.increment)