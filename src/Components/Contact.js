import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {showdata,showUser, userData} from '../Redux/action'
import {connect} from 'react-redux'

class Contact extends Component {
    constructor(props) {
        super(props)
        
    }
//     loadUsers=async=>{
//                 axios.get('https://jsonplaceholder.typicode.com/users')
//             .then(res=>{
//                 const resultedUsers=res.data;
//                 console.log(resultedUsers)
//                 this.setState({users:resultedUsers})
//             })
//    }

// fetchUsers = () => {
    
//     const {dispatch} = this.props;
//     axios.get('https://jsonplaceholder.typicode.com/users')
//     .then(res=>{
//         const resultedUsers=res.data;
//         console.log(resultedUsers)
//         dispatch(userData(resultedUsers))
//     })
// }
 
    render() {
        return (
            <div>

                <h1>This is Contact Page</h1>  
                <Link exact to="/"><button>Return To Home</button></Link> 
                <div>
                <button onClick={()=>this.props.showData(this.props.name)}>Show Users</button>
                {this.props.users.length>0 ?  this.props.users.map(item => (
                   <ul key={item.id}>
                   <li>{item.username}</li>
                    <li>{item.name}</li>
                    <li>{item.email}</li>
                    </ul>
                )) :
            
                 <ul>
                   <li>{this.props.users.username}</li>
                    <li>{this.props.users.name}</li>
                    <li>{this.props.users.email}</li>
                    </ul>

                }
                
                 </div>
                    
               
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{

      
    
        name:state.namee,
        users:state.users
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
         showData:(name)=>
         {
             console.log("ehada")
             dispatch(showUser(name))
            }
        //dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact) 