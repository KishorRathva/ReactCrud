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
             return <TableRow obj={object} Delete={this.delete} key={object.id}/>;
         })
     }
     delete = (id) => {
        console.log("from indexComponents");
        console.log(id);
        const index = this.state.Empdata.findIndex(x =>  x.id == id);
    
        console.log(index)

        if(window.confirm("Are you sure to delete?")){
            axios.delete('https://jsonplaceholder.typicode.com/posts/'+id )
        .then(() => {
            console.log('Deleted');

            this.state.Empdata.splice(index,1);
            this.setState({Empdata:this.state.Empdata});
            // console.log(this.state.Empdata)
          

        })
        .catch(err => console.log(err))
        }
        
    }
     
    render() {
        return (
            <div>
                 <Link to={ {pathname:"/create/"}} className="btn btn-success">Create Post</Link>
               <h3 align="center">Posts </h3>
               <table className="table table-striped" style={{marginTop:20}}>
               <thead>
                   <tr>
                       <th style={{textAlign:"center"}}>
                            Title
                       </th>
                       <th style={{textAlign:"center"}}>
                            Comment
                       </th>
                       <th colSpan="2" style={{textAlign:"center"}}>
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