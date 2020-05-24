import React, {Component} from 'react'
import Card from './Card'
import API from '../utils/API'
import '../index.css'

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            users : []
    
        }

    }
    componentDidMount(){
    API.getUsers().then(data => {
        console.log(data)
        this.setState({users: data.data.results})
    })
    }
    render() 
    {
        return (<div className="list">
        <Card users={this.state.users}/>
        </div>)

    }
}


export default List