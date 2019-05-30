import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class editComponent extends Component {
    constructor(props) {
        super(props)
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSalary = this.onChangeSalary.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.delete = this.delete.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
           employee_name:'',
           employee_salary:'',
           employee_age:''
        }
      }

      componentDidMount(){
      
        console.log(this.props)
        this.setState({
                      employee_name:this.props.location.dataPro.employee_name,
                      employee_salary:this.props.location.dataPro.employee_salary,
                      employee_age : this.props.location.dataPro.employee_age,
                  });
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
        axios.put('http://dummy.restapiexample.com/api/v1/update/'+this.props.match.params.id,obj)
        .then(res => {
          console.log(res.data);
          this.props.history.push('/index');
        });
      }
    delete(){
      console.log(this.props.match.params.id);
      // let sure = alert("are you sure");
      // if(sure){
      //     axios.delete('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id )
      // .then(() => {
      //     console.log('Deleted');
      // })
      // .catch(err => console.log(err))
      // }
      console.log("from editComponents ");
      this.props.location.Delete(this.props.match.params.id);
      this.props.history.push('/index');
      
  }
    render() {
        return (
          <div style={{ marginTop: 10 }}>
              <button onClick={this.delete} className="btn btn-danger">Delete</button>
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

export default editComponent
