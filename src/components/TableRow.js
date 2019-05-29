import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
export class TableRow extends Component {
    constructor(props) {
        super(props)

        this.delete = this.delete.bind(this);
    }


    delete(){
        console.log(this.props.obj.id)
        let sure = alert("are you sure");
        if(sure){
            axios.delete('https://jsonplaceholder.typicode.com/posts/'+this.props.obj.id )
        .then(() => {
            console.log('Deleted');
        })
        .catch(err => console.log(err))
        }
        
    }
    
    render() {
        const { title , body} = this.props.obj ;
        return (
            <tr>
                <td>
                    {title}
                </td>
                <td>
                    {body}
                </td>
                <td>
                <Link to={ {pathname:"/edit/"+this.props.obj.id,
                            dataPro:this.props.obj}}  className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}

export default TableRow
