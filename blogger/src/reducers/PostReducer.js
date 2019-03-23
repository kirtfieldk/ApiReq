//state default is a empty array // 
//vary common for reducers to have switch statments//
export default(state = [], action) =>{
    switch(action.type){
        case 'FETCH_POST':
            return action.payload;
        default:
            return state;

    }
   
}