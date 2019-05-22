import React, { Component } from "react";
export default class CreateContact extends Component {
  constructor(props) {
    super(props);

    this.onChangeContactName = this.onChangeContactName.bind(this);
    this.onChangeContactAddress = this.onChangeContactAddress.bind(this);
    this.onChangeContactPhone = this.onChangeContactPhone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      contact_name: "",
      contact_address: "",
      contact_phone: "",
      contact_completed: false
    };
  }
  onChangeContactName(e) {
    this.setState({
      contact_name: e.target.value
    });
  }
  onChangeContactAddress(e) {
    this.setState({
      contact_address: e.target.value
    });
  }
  onChangeContactPhone(e) {
    this.setState({
      contact_phone: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();

    console.log(`Form Submitted`);
    console.log(`Contact Name: ${this.state.contact_name}`);
    console.log(`Contact Address: ${this.state.contact_address}`);
    console.log(`Contact Phone; ${this.state.contact_phone}`);
    console.log(`Contact Completed: ${this.state.contact_completed}`);

    this.setState({
      contact_name: "",
      contact_address: "",
      contact_phone: "",
      contact_completed: false
    });
  }

  render() {
    return (
      <div style={{ marginTop: 15 }}>
        <h3>Create New Contact</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Shipper Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.contact_name}
              onChange={this.onChangeContactName}
            />
          </div>
          <div className="form-group">
            <label>Shipper Address</label>
            <input
              type="text"
              className="form-control"
              value={this.state.contact_address}
              onChange={this.onChangeContactAddress}
            />
          </div>
          <div className="form-group">
            <label>Shipper Phone</label>
            <input
              type="tel"
              className="form-control"
              value={this.state.contact_phone}
              onChange={this.onChangeContactPhone}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Contact"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
