import React, { Component } from "react";
import axios from 'axios';
export default class CreateLoad extends Component {
  constructor(props) {
    super(props);

    this.onChangeLoadNumber = this.onChangeLoadNumber.bind(this);
    this.onChangeLoadDriverName = this.onChangeLoadDriverName.bind(this);
    this.onChangeLoadRate = this.onChangeLoadRate.bind(this);
    this.onChangeLoadTractorNumber = this.onChangeLoadTractorNumber.bind(this);
    this.onChangeLoadTrailerNumber = this.onChangeLoadTrailerNumber.bind(this);
    this.onChangeLoadPuDate = this.onChangeLoadPuDate.bind(this);
    this.onChangeLoadDelDate = this.onChangeLoadDelDate.bind(this);
    this.onChangeLoadPuLocation = this.onChangeLoadPuLocation.bind(this);
    this.onChangeLoadDelLocation = this.onChangeLoadDelLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      load_number: "",
      load_driver_name: "",
      load_rate: "",
      load_tractor_number: "",
      load_trailer_number: "",
      load_pu_date: "",
      load_del_date: "",
      load_pu_location: "",
      load_del_location: "",
      load_completed: false
    };
  }

  onChangeLoadNumber(e) {
    this.setState({
      load_number: e.target.value
    });
  }
  onChangeLoadDriverName(e) {
    this.setState({
      load_driver_name: e.target.value
    });
  }
  onChangeLoadRate(e) {
    this.setState({
      load_rate: e.target.value
    });
  }
  onChangeLoadTractorNumber(e) {
    this.setState({
      load_tractor_number: e.target.value
    });
  }
  onChangeLoadTrailerNumber(e) {
    this.setState({
      load_trailer_number: e.target.value
    });
  }
  onChangeLoadPuDate(e) {
    this.setState({
      load_pu_date: e.target.value
    });
  }
  onChangeLoadDelDate(e) {
    this.setState({
      load_del_date: e.target.value
    });
  }
  onChangeLoadPuLocation(e) {
    this.setState({
      load_pu_location: e.target.value
    });
  }
  onChangeLoadDelLocation(e) {
    this.setState({
      load_del_location: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();

    //console log when submitted
    console.log(`Load Form Submitted`);
    console.log(`Load Number: ${this.state.load_number}`);
    console.log(`Load Driver Name: ${this.state.load_driver_name}`);
    console.log(`Load Rate: ${this.state.load_rate}`);
    console.log(`Load Tractor Number: ${this.state.load_tractor_number}`);
    console.log(`Load Trailer Number: ${this.state.load_trailer_number}`);
    console.log(`Load Pu Date: ${this.state.load_pu_date}`);
    console.log(`Load Del Date: ${this.state.load_del_date}`);
    console.log(`Load Pu Location: ${this.state.load_pu_location}`);
    console.log(`Load Del Location: ${this.state.load_del_location}`);
    console.log(`Load Completed: ${this.state.load_completed}`);

    const newLoad = {
      load_number: this.state.load_number,
      load_driver_name: this.state.load_driver_name,
      load_rate: this.state.load_rate,
      load_tractor_number: this.state.load_tractor_number,
      load_trailer_number: this.state.load_trailer_number,
      load_pu_date: this.state.load_pu_date,
      load_del_date: this.state.load_pu_location,
      load_pu_location: this.state.load_pu_location,
      load_del_location: this.state.load_del_location,
      load_completed: this.state.load_completed
    }

    // let result;

    axios.post('http://localhost:4000/loads/add', newLoad)
    .then(res => {
      this.setState({
        complete: true,
        load_number: "",
        load_driver_name: "",
        load_rate: "",
        load_tractor_number: "",
        load_trailer_number: "",
        load_pu_date: "",
        load_del_date: "",
        load_pu_location: "",
        load_del_location: "",
        load_completed: false
      }, () => console.log(res.data));
    })
    .catch(err => {
      this.setState({
        complete: false,
        load_number: "",
        load_driver_name: "",
        load_rate: "",
        load_tractor_number: "",
        load_trailer_number: "",
        load_pu_date: "",
        load_del_date: "",
        load_pu_location: "",
        load_del_location: "",
        load_completed: false
      });
    });
  }

  renderSuccess = () => {
    switch (this.state.complete) {
      case true:
        return <span>LOAD CREATED SUCCESSFULLY</span>
      case false:
        return <span>SOMETHING WENT WRONG</span>
      case undefined:
        return null
    }
  };

  render() {
    return (
      <div style={{ marginTop: 15 }}>
        {this.renderSuccess()}
        <h3>Create New Load</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">

            <label>Load Number: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.load_number}
              onChange={this.onChangeLoadNumber}
            />

            <label>Driver Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.load_driver_name}
              onChange={this.onChangeLoadDriverName}
            />

            <label>Rate: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.load_rate}
              onChange={this.onChangeLoadRate}
            />

            <label>Tractor Number: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.load_tractor_number}
              onChange={this.onChangeLoadTractorNumber}
            />

             <label>Trailer Number: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.load_trailer_number}
              onChange={this.onChangeLoadTrailerNumber}
            />

            <label>Pick Up Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.load_pu_date}
              onChange={this.onChangeLoadPuDate}
            />

            <label>Delivery Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.load_del_date}
              onChange={this.onChangeLoadDelDate}
            />

            <label>Pick Up Location: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.load_pu_location}
              onChange={this.onChangeLoadPuLocation}
            />

            <label>Delivery Location: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.load_del_location}
              onChange={this.onChangeLoadDelLocation}
            />

          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Load"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
