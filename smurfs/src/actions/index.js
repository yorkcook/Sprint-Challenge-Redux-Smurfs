import axios from "axios";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const CREATING = "CREATING";
export const ADDING = "ADDING";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FAILURE }));
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: CREATING });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({ type: ADDING, payload: res.data });
    })
    .catch(err => dispatch({ type: FAILURE }));
};

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
