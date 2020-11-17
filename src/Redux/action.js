import {SHOW_DATA,INPUT_NAME,USER_DATA} from './actionTypes'
import {initialState} from './reducer'
import axios from 'axios'

console.log(initialState)
export const showdata=()=>{
    return{
        type:SHOW_DATA
    }
}
export const inputName=(e,data)=>{
    return{
        type:INPUT_NAME,
        payload:data
    }
}
export const userData=(data)=>{
    return{
        type:USER_DATA,
        payload:data
    }
}

export const showUser= (name) => (dispatch) => {
   // const {namee}=initialState
   //console.log("name eyh hai", namee)
    axios.get(`https://jsonplaceholder.typicode.com/users/${name}`)
            .then(res=>{
                const resultedUsers=res.data;
                console.log(resultedUsers)
                
                dispatch(userData(resultedUsers))
                //dispatch(showdata(e,resultedUsers));
            })
}