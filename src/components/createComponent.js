import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class Create extends Component {
    constructor(props) {
        super(props)
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSalary = this.onChangeSalary.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
           employee_name:'',
           employee_salary:'',
           employee_age:''
        }
      }
      onChangeName(e){
        this.setState({
          employee_name:e.target.value
        });
      }
      onChangeSalary(e){
        this.setState({
          employee_salary:e.target.value
        })
      }
      onChangeAge(e){
        this.setState({
          employee_age:e.target.value
        })
      }
     
      onSubmit(e){
        e.preventDefault();
        const obj = {
            name : this.state.employee_name,
            age: this.state.employee_age,
            salary : this.state.employee_salary
        };
        axios.post('http://dummy.restapiexample.com/api/v1/create',obj)
        .then(res => {
          console.log(res.data);
          this.props.history.push('/index');
        });
      }
 
  render() {
      return (
        <div style={{ marginTop: 10 }}>
          <h3>Edit Emplyee:</h3>
          <form onSubmit={this.onSubmit}>
              <div className="form-group">
                  <label>Name:  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={this.state.employee_name}
                    onChange={this.onChangeName}
                    />
              </div>
              <div className="form-group">
                  <label>Salary:  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={this.state.employee_salary}
                    onChange={this.onChangeSalary}
                    />
              </div> 
              <div className="form-group">
                  <label>Age:  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={this.state.employee_age}
                    onChange={this.onChangeAge}
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