import React, { Component } from 'react'
import axios from 'axios';
import TableRow from './TableRow'
import { Link } from 'react-router-dom';

 class indexComponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              Empdata:[]
         }
         this.test();
     }

     test(){

         console.log('inside test');
     }
     componentDidUpdate(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
           
             this.setState({Empdata:res.data});
           //   console.log(this.state.Empdata)
       
        })
        .catch((error) => {
            console.log(error)
        })
     }

     componentDidMount(){
         axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(res => {
            
              this.setState({Empdata:res.data});
            //   console.log(this.state.Empdata)
        
         })
         .catch((error) => {
             console.log(error)
         })
     }
     TableRow(){
         return this.state.Empdata.map((object)=>{
             return <TableRow obj={object} key={object.id}/>;
         })
     }
     
    render() {
        return (
            <div>
                 <Link to={ {pathname:"/create/"}} className="btn btn-success">Create Post</Link>
               <h3 align="center">Posts </h3>
               <table className="table table-striped" style={{marginTop:20}}>
               <thead>
                   <tr>
                       <th>
                            Title
                       </th>
                       <th>
                            Comment
                       </th>
                       <th colSpan="2">
                            Action
                       </th>
                   </tr>
               </thead>
               <tbody>
                   {this.TableRow()}
               </tbody>
               </table>
            </div>
        )
    }
}

export default indexComponent