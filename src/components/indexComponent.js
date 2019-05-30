import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";
import { Link } from "react-router-dom";
import _ from "lodash";
class indexComponent extends Component {
  constructor(props) {
    super(props);
    this.mainData = [];
    this.chuncks = [];
    this.changePage = this.changePage.bind(this);
    this.state = {
      Empdata: [],
    };
  }

  componentDidMount() {
    this.loadPostDataFromServer();
  }
  loadPostDataFromServer() {
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => {
        console.log(res.data.length);
        this.mainData = res.data;
        this.createChunk();
        //   console.log(this.state.Empdata)
      })
      .catch(error => {
        console.log(error);
      });
  }

  //Add  chuncks
  createChunk() {
    console.log("inside chunk");
    this.chuncks = _.chunk(this.mainData, 10);
    this.setState({
        Empdata:this.chuncks[0]
      });
    console.log(this.chuncks[0]);
  }

  //pagination

  pagination() {
    return _.range(10).map(i => {
      return (
        <li className="page-item">
          <a className="page-link" key={i} onClick={this.changePage.bind(null,i)}>
            {i+1}
          </a>
        </li>
      );
    });
  }
  changePage(i) {
    console.log(i);
    this.setState({
        Empdata:this.chuncks[i]
    })
    
  }

  TableRow() {
    return this.state.Empdata.map(object => {
      return <TableRow obj={object} Delete={this.delete} key={object.id} />;
    });
  }

  delete = id => {
    console.log("from indexComponents");
    console.log(id);
    const index = this.state.Empdata.findIndex(x => x.id == id);

    console.log(index);

    if (window.confirm("Are you sure to delete?")) {
      axios
        .delete("http://dummy.restapiexample.com/api/v1/delete/" + id)
        .then(() => {
          console.log("Deleted");

          this.state.Empdata.splice(index, 1);
          this.setState({ Empdata: this.state.Empdata });
          // console.log(this.state.Empdata)
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Link to={{ pathname: "/create/" }} className="btn btn-success">
          Add Emplyee
        </Link>
        <h3 align="center">Emplyees</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>Name</th>
              <th style={{ textAlign: "center" }}>Salary</th>
              <th style={{ textAlign: "center" }}>Age</th>
              <th colSpan="2" style={{ textAlign: "center" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>{this.TableRow()}</tbody>
        </table>
        <div>
          <nav aria-label="...">
            <ul className="pagination pagination-lg">
             {this.pagination()}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default indexComponent;
