import React, { Component } from "react";
import API from '../API';

class ContactBox extends Component {
    constructor(props) {
      super(props);
      this.state = {
  
      };
      this.editContact = this.editContact.bind(this);
      this.showContact = this.showContact.bind(this);
    }
  
    editContact() {
      this.setState({...this.props.contact});
      this.props.onEdit(this.props.contact.contact_number);
      console.log(this.state)
    };
  
    showContact() {
      this.props.onShow(this.props.contact);
    }
  
    onTextChanged(evt) {
      console.log(evt.value)
    }
  
    render() {
      if (this.props.editing) {
        return <React.Fragment>
          <div>
            <span onClick={() => this.props.onUpdate(this.state)}>Update</span>
            <span onClick={this.props.onCancel}>Cancel</span>
            {/* <span className={this.props.contact.contact_completed ? 'completed' : ""}>{this.props.contact.contact_number}</span> */}
            <span className={this.props.contact.contact_completed ? 'completed' : ""}><input onChange={e => this.setState({contact_contact_name: e.target.value})} value={this.state.contact_contact_name} /></span>
            <span className={this.props.contact.contact_completed ? 'completed' : ""}><input onChange={e => this.setState({contact_address: e.target.value})} value={this.state.contact_address} /></span>
            <span className={this.props.contact.contact_completed ? 'completed' : ""}><input onChange={e => this.setState({contact_tractor_number: e.target.value})} value={this.state.contact_tractor_number} /></span>
            <span className={this.props.contact.contact_completed ? 'completed' : ""}><input onChange={e => this.setState({contact_phone: e.target.value})} value={this.state.contact_phone} /></span>
            {/* <span className={this.props.contact.contact_completed ? 'completed' : ""}><input onChange={e => this.setState({contact_pu_date: e.target.value})} value={this.state.contact_pu_date} /></span>
            <span className={this.props.contact.contact_completed ? 'completed' : ""}><input onChange={e => this.setState({contact_del_date: e.target.value})} value={this.state.contact_del_date} /></span>
            <span className={this.props.contact.contact_completed ? 'completed' : ""}><input onChange={e => this.setState({contact_pu_location: e.target.value})} value={this.state.contact_pu_location} /></span>
            <span className={this.props.contact.contact_completed ? 'completed' : ""}><input onChange={e => this.setState({contact_del_location: e.target.value})} value={this.state.contact_del_location} /></span> */}
          </div>
        </React.Fragment>
      } else {
        return <React.Fragment>
          <div>
            <span onClick={this.editContact}>Edit</span>
            <span onClick={() => this.props.onDelete(this.props.contact)}>Delete</span>
            <span className={this.props.contact.contact_completed ? 'completed' : ""}>{this.props.contact.contact_number}</span>
            <span className={this.props.contact.contact_completed ? 'completed' : ""}>{this.props.contact.contact_contact_name}</span>
            <span className={this.props.contact.contact_completed ? 'completed' : ""}>{this.props.contact.contact_address}</span>
            {/* <span className={this.props.contact.contact_completed ? 'completed' : ""}>{this.props.contact.contact_tractor_number}</span>
            <span className={this.props.contact.contact_completed ? 'completed' : ""}>{this.props.contact.contact_phone}</span>
            <span className={this.props.contact.contact_completed ? 'completed' : ""}>{this.props.contact.contact_pu_date}</span>
            <span className={this.props.contact.contact_completed ? 'completed' : ""}>{this.props.contact.contact_del_date}</span>
            <span className={this.props.contact.contact_completed ? 'completed' : ""}>{this.props.contact.contact_pu_location}</span>
            <span className={this.props.contact.contact_completed ? 'completed' : ""}>{this.props.contact.contact_del_location}</span> */}
          </div>
        </React.Fragment>
      }
    }
  };
  class Contact extends Component {
    constructor(props) {
      super(props);
      this.state = {
  
      };
      this.editContact = this.editContact.bind(this);
      this.showContact = this.showContact.bind(this);
    }
  
    editContact() {
      this.setState({...this.props.contact});
      this.props.onEdit(this.props.contact.contact_name);
      console.log(this.state)
    };
  
    showContact() {
      this.props.onShow(this.props.contact);
    }
  
    onTextChanged(evt) {
      console.log(evt.value)
    }
  
    render() {
      return <React.Fragment>
        <tr>
          <td className={this.props.contact.contact_completed ? 'completed' : ""}>{this.props.contact.contact_name}</td>
          <td className={this.props.contact.contact_completed ? 'completed' : ""}>{this.props.contact.contact_address}</td>
          <td className={this.props.contact.contact_completed ? 'completed' : ""}>{this.props.contact.contact_phone}</td>
          <td>
            <span onClick={this.showContact}>View</span>
          </td>
        </tr>
      </React.Fragment>
    }
  }
  
  export default class ContactList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        contacts: [],
        editable: '',
      };
    }
  
    getContacts = () => {
      API.contacts.list().then(contacts => this.setState({ contacts }));
    };
  
    onShow = (contact) => {
      console.log('SHOW Contact', contact);
      API.contacts.show(contact)
        .then(obj => this.setState({
            contact: {...obj}
        }))
        .catch()
    };
  
    onCancel = () => {
      this.setState({
        editable: ''
      })
    };
  
    onEdit = (contactNumber) => {
      this.setState({
        editable: contactNumber
      })
    };
  
    onUpdate = (contact) => {
      console.log('UPDATE CONTACT', contact);
      API.contacts.update(contact)
        .then(obj => this.setState(state => {
          this.getContacts();
          this.onShow(obj);
          return {
            editable: ''
          }
        }))
        .catch(error => console.log('Cannot update contact', error))
    };
  
    onDelete = (contact) => {
      API.contacts.delete(contact)
        .then(obj => this.setState(state => {
          this.getContacts();
          return {
            contact: null,
            editable: ''
          }
        }))
        .catch(error => console.log('Cannot delete contact', error))
    };
  
    componentDidMount() {
      this.getContacts();
    }
  
    renderContact() {
      if (this.state.contact) {
        return <ContactBox
          editing={this.state.editable === this.state.contact.contact_name}
          onDelete={this.onDelete}
          onEdit={this.onEdit}
          onUpdate={this.onUpdate}
          onCancel={this.onCancel}
          onShow={this.onShow}
          contact={this.state.contact} />
      } else {
        return null
      }
    }
  
    render() {
      const contactList = this.state.contacts.map( (currentcontact, i) => (
        <Contact
          // editing={this.state.editable === currentcontact.contact_name}
          onDelete={this.onDelete}
          onEdit={this.onEdit}
          onUpdate={this.onUpdate}
          onCancel={this.onCancel}
          onShow={this.onShow}
          contact={currentcontact}
          key={i} />
      ));
  
      return (
        <div>
          <h2>Contacts List</h2>
          <div>
            <div>
              <table className="table table-striped table-dark" style={{ marginTop: 10 }}>
                <thead>
                  <tr>
                      <th>Contact Number</th>
                      <th>Driver Name</th>
                      {/*<th>Rate</th>*/}
                      {/*<th>Tractor Number</th>*/}
                      {/*<th>Trailer Number</th>*/}
                      {/*<th>Pickup Date</th>*/}
                      {/*<th>Delivary Date</th>*/}
                      {/*<th>Pickup Location</th>*/}
                      <th>Delivary Location</th>
                      {/*<th>Actions</th>*/}
                  </tr>
                </thead>
                <tbody>
                  {contactList}
                </tbody>
              </table>
            </div>
            <div>
              {this.renderContact()}
            </div>
          </div>
        </div>
      );
    }
  }
  