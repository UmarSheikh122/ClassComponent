import {SHOW_DATA,INPUT_NAME,USER_DATA} from './actionTypes'

import {showdata,inputName} from './action'

export const initialState={
    namee:'',
    flag:false,
    users:[{
       
    }]
}



const reducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case SHOW_DATA:
            //console.log(state)
            return{
                ...state,
                flag:true
            }
        case INPUT_NAME:
            return{
                ...state,
                namee:action.payload
            }
        case USER_DATA:
            return{
                
                ...state.users,
                users:action.payload
                

            }
        default:
            return state;
    }
}
export default reducer