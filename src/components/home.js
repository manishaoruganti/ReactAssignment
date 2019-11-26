import React, { Component } from "react";
import axios from "axios";
import { Table } from "reactstrap";
import SearchResults from "react-filter-search";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: "",
      pageLoaded: false,
    };
  }
  componentWillMount() {
    this._refreshproducts();
  }


  _refreshproducts() {
    axios.get("http://localhost:3001/books").then(response => {
      this.setState({
        data: response.data,
        pageLoaded: true
      });
    });
  }

  render() {
    const { data, value } = this.state;

    if (!this.state.pageLoaded) {
      return (
        <div className="text-center">
          <h1>Loading....</h1>
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <div className="row mt-4 mb-4">
            <div className="col-8"><h3>products Available</h3></div>


          </div>

          <SearchResults
            value={value}
            data={data}
            renderResults={results => (
              <div className="container-fluid col-12">
                <Table hover>
                  <thead>
                    <tr>

                      <th>Title</th>
                      <th>quantity</th>

                      <th>Price</th>

                    </tr>
                  </thead>

                  {results.map(el => (
                    <tbody>
                      <tr key={el.id}>

                        <td>{el.title}</td>
                        <td>{el.quantity}</td>
                        <td>${el.price}</td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              </div>
            )}
          />

        </div>
      );
    }
  }
}

export default Home;