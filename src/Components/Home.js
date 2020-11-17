import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {showdata,inputName} from '../Redux/action'
import {connect, useStore} from 'react-redux'

class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <input value={this.props.name} type="text" placeholder="Id for Specific, empty for all" onChange={(e)=>this.props.inputName(e,e.target.value)}/>
               
               <button onClick={this.props.showData}>Show data</button>
               <Link exact to="/contact"><button>Go Next</button></Link>
               <div>
                   {/* {this.props.name} */}
                   {this.props.flag ? this.props.name :""}
                   

               </div>
            </div>
        )
    }

}
const mapStateToProps=(state)=>{
    return{
        name:state.namee,
        flag:state.flag
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        showData:(e)=>{
            e.preventDefault()
            dispatch(showdata())
        },
        inputName:(e,data)=>{
            dispatch(inputName(e,data))
        }
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(Home)