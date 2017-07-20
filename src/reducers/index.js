import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import todos from './todos'

const rootReducer = combineReducers({
  todos,
  form: formReducer
})

const store = createStore(rootReducer)

export default store