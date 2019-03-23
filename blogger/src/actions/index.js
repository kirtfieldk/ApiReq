import  _ from 'lodash';
import jasonPlaceholder from '../api/jsonPlaceHolder';


export const fetchPostAndUsers = () => async (dispatch, getState) =>{
    //waits for fetchPost() req to be completed
    await dispatch(fetchPost());
    //cretates and array of all of the different userId properties
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    console.log(userIds);
    //Look at the _ Docs
    userIds.forEach(id => dispatch(fetchUser(id)));
}

export const fetchPost = ()=> async (dispatch) => {
        const response = await jasonPlaceholder.get('/posts');
       //Useing redux-thunk 
       //useing this we cannot use return we must use dispatch
        dispatch({ type: 'FETCH_POST', payload: response.data })
    };
    export const fetchUser = id => async dispatch => {
        const response = await jasonPlaceholder.get(`/users/${id}`);
        dispatch({type: 'FETCH_USER', payload: response.data});
    };
    

///////////////////Memoiz////////////////////////////////////////////////////

// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// _ = a private function 
//This _.memoize function allowes use to not make 100 network request just 10!
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jasonPlaceholder.get(`/users/${id}`);
//     dispatch({type: 'FETCH_USER', payload: response.data});
// });