import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class TableRow extends Component {
    constructor(props) {
        super(props)

        this.delete = this.delete.bind(this);
    }


    delete(){
        console.log(this.props.obj.id)
        console.log("from tablerows")
        // const confirmation = confirm('Are you sure to delete?');
        // console.log(confirmation);
    //      if(window.confirm("Are you sure to delete?")) {
    //         axios.delete('https://jsonplaceholder.typicode.com/posts/'+this.props.obj.id)
    //     .then(() => {
    //         console.log('Deleted');

    //     })
    //     .catch(err => console.log(err));
    //    }
          this.props.Delete(this.props.obj.id);
        
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
                            dataPro:this.props.obj,
                            Delete:this.props.Delete}}  className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}

export default TableRow
