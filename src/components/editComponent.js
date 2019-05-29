import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class editComponent extends Component {
    constructor(props) {
        super(props)
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeBody = this.onChangeBody.bind(this);
        this.delete = this.delete.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
           title:'',
           body:''
        }
      }

      componentDidMount(){
      
        console.log(this.props)
        this.setState({
                      title:this.props.location.dataPro.title,
                      body:this.props.location.dataPro.body
                  });
      }
      onChangeTitle(e){
        this.setState({
          name:e.target.value
        });
      }
      onChangeBody(e){
        this.setState({
          capital:e.target.value
        })
      }
      onSubmit(e){
        e.preventDefault();
        const obj = {
            _id:this.props.match.params.id,
            name : this.state.title,
            capital: this.state.body
        };
        axios.put('https://jsonplaceholder.typicode.com/posts',obj)
        .then(res => console.log(res.data));

        this.props.history.push('/index');
    }
    delete(){
      console.log(this.props.match.params.id);
      let sure = alert("are you sure");
      if(sure){
          axios.delete('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id )
      .then(() => {
          console.log('Deleted');
      })
      .catch(err => console.log(err))
      }
      
  }
    render() {
        return (
          <div style={{ marginTop: 10 }}>
              <button onClick={this.delete} className="btn btn-danger">Delete</button>
          <h3>Write Post:</h3>
          <form onSubmit={this.onSubmit}>
              <div className="form-group">
                  <label>Title:  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    />
              </div>
              <div className="form-group">
                  <label>Comment: </label>
                  <input type="text" 
                    className="form-control"
                    value={this.state.body}
                    onChange={this.onChangeBody}
                    />
              </div>
              <div className="form-group">
             
                  <input type="submit" value="Submit" className="btn btn-primary"/>
                  <Link to={ {pathname:"/index/"}} className="btn btn-danger">cancel</Link>
              </div>
          </form>
      </div>
        )
    }
}

export default editComponent
