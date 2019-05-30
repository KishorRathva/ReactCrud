import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class Create extends Component {
    constructor(props) {
        super(props)
        this. onChangeTitle = this. onChangeTitle.bind(this);
        this.onChangeBody = this.onChangeBody.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
           title:'',
           body:''
        }
      }
      onChangeTitle(e){
        this.setState({
          title:e.target.value
        });
      }
      onChangeBody(e){
        this.setState({
          body:e.target.value
        })
      }
     
      onSubmit(e){
        e.preventDefault();
        const obj = {
            title : this.state.title,
            body: this.state.body,
        };

        axios.post('http://localhost:8080/',obj)
        .then(res => console.log(res.data));
        console.log(this.state);
        this.setState({
          title:"",
          body:""
        })
        this.props.history.push('/index');
      }
 
  render() {
      return (
        <div style={{ marginTop: 10 }}>
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
                <textarea type="text" 
                  className="form-control"
                  value={this.state.body}
                  onChange={this.onChangeBody}
                  rows="4"
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