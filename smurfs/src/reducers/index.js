import { FETCHING, SUCCESS, FAILURE, ADDING } from "../actions/index";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addSmurf: false,
  error: ""
};

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        error: "",
        fetchingSmurfs: true
      };
    case SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case FAILURE:
      return {
        ...state,
        error: "We have been SMURFED!",
        fetchingSmurfs: false
      };

    case ADDING:
      return {
        ...state,
        addSmurf: true,
        smurfs: action.payload
      };

    default:
      return state;
  }
};

export default smurfReducer;

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
