import React, { Component } from "react";
import API from '../API';

class LoadBox extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.editLoad = this.editLoad.bind(this);
    this.showLoad = this.showLoad.bind(this);
  }

  editLoad() {
    this.setState({...this.props.load});
    this.props.onEdit(this.props.load.load_number);
    console.log(this.state)
  };

  showLoad() {
    this.props.onShow(this.props.load);
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
          <span className={this.props.load.load_completed ? 'completed' : ""}>{this.props.load.load_number}</span>
          <span className={this.props.load.load_completed ? 'completed' : ""}><input onChange={e => this.setState({load_driver_name: e.target.value})} value={this.state.load_driver_name} /></span>
          <span className={this.props.load.load_completed ? 'completed' : ""}><input onChange={e => this.setState({load_rate: e.target.value})} value={this.state.load_rate} /></span>
          <span className={this.props.load.load_completed ? 'completed' : ""}><input onChange={e => this.setState({load_tractor_number: e.target.value})} value={this.state.load_tractor_number} /></span>
          <span className={this.props.load.load_completed ? 'completed' : ""}><input onChange={e => this.setState({load_trailer_number: e.target.value})} value={this.state.load_trailer_number} /></span>
          <span className={this.props.load.load_completed ? 'completed' : ""}><input onChange={e => this.setState({load_pu_date: e.target.value})} value={this.state.load_pu_date} /></span>
          <span className={this.props.load.load_completed ? 'completed' : ""}><input onChange={e => this.setState({load_del_date: e.target.value})} value={this.state.load_del_date} /></span>
          <span className={this.props.load.load_completed ? 'completed' : ""}><input onChange={e => this.setState({load_pu_location: e.target.value})} value={this.state.load_pu_location} /></span>
          <span className={this.props.load.load_completed ? 'completed' : ""}><input onChange={e => this.setState({load_del_location: e.target.value})} value={this.state.load_del_location} /></span>
        </div>
      </React.Fragment>
    } else {
      return <React.Fragment>
        <div>
          <span onClick={this.editLoad}>Edit</span>
          <span onClick={() => this.props.onDelete(this.props.load)}>Delete</span>
          <span className={this.props.load.load_completed ? 'completed' : ""}>{this.props.load.load_number}</span>
          <span className={this.props.load.load_completed ? 'completed' : ""}>{this.props.load.load_driver_name}</span>
          <span className={this.props.load.load_completed ? 'completed' : ""}>{this.props.load.load_rate}</span>
          <span className={this.props.load.load_completed ? 'completed' : ""}>{this.props.load.load_tractor_number}</span>
          <span className={this.props.load.load_completed ? 'completed' : ""}>{this.props.load.load_trailer_number}</span>
          <span className={this.props.load.load_completed ? 'completed' : ""}>{this.props.load.load_pu_date}</span>
          <span className={this.props.load.load_completed ? 'completed' : ""}>{this.props.load.load_del_date}</span>
          <span className={this.props.load.load_completed ? 'completed' : ""}>{this.props.load.load_pu_location}</span>
          <span className={this.props.load.load_completed ? 'completed' : ""}>{this.props.load.load_del_location}</span>
        </div>
      </React.Fragment>
    }
  }
};

class Load extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.editLoad = this.editLoad.bind(this);
    this.showLoad = this.showLoad.bind(this);
  }

  editLoad() {
    this.setState({...this.props.load});
    this.props.onEdit(this.props.load.load_number);
    console.log(this.state)
  };

  showLoad() {
    this.props.onShow(this.props.load);
  }

  onTextChanged(evt) {
    console.log(evt.value)
  }

  render() {
    return <React.Fragment>
      <tr>
        <td className={this.props.load.load_completed ? 'completed' : ""}>{this.props.load.load_number}</td>
        <td className={this.props.load.load_completed ? 'completed' : ""}>{this.props.load.load_driver_name}</td>
        <td className={this.props.load.load_completed ? 'completed' : ""}>{this.props.load.load_del_location}</td>
        <td>
          <span onClick={this.showLoad}>View</span>
        </td>
      </tr>
    </React.Fragment>
  }
}

export default class LoadList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loads: [],
      editable: '',
    };
  }

  getLoads = () => {
    API.loads.list().then(loads => this.setState({ loads }));
  };

  onShow = (load) => {
    console.log('SHOW LOAD', load);
    API.loads.show(load)
      .then(obj => this.setState({
          load: {...obj}
      }))
      .catch()
  };

  onCancel = () => {
    this.setState({
      editable: ''
    })
  };

  onEdit = (loadNumber) => {
    this.setState({
      editable: loadNumber
    })
  };

  onUpdate = (load) => {
    console.log('UPDATE LOAD', load);
    API.loads.update(load)
      .then(obj => this.setState(state => {
        this.getLoads();
        this.onShow(obj);
        return {
          editable: ''
        }
      }))
      .catch(error => console.log('Cannot update load', error))
  };

  onDelete = (load) => {
    API.loads.delete(load)
      .then(obj => this.setState(state => {
        this.getLoads();
        return {
          load: null,
          editable: ''
        }
      }))
      .catch(error => console.log('Cannot delete load', error))
  };

  componentDidMount() {
    this.getLoads();
  }

  renderLoad() {
    if (this.state.load) {
      return <LoadBox
        editing={this.state.editable === this.state.load.load_number}
        onDelete={this.onDelete}
        onEdit={this.onEdit}
        onUpdate={this.onUpdate}
        onCancel={this.onCancel}
        onShow={this.onShow}
        load={this.state.load} />
    } else {
      return null
    }
  }

  render() {
    const loadList = this.state.loads.map( (currentLoad, i) => (
      <Load
        // editing={this.state.editable === currentLoad.load_number}
        onDelete={this.onDelete}
        onEdit={this.onEdit}
        onUpdate={this.onUpdate}
        onCancel={this.onCancel}
        onShow={this.onShow}
        load={currentLoad}
        key={i} />
    ));

    return (
      <div>
        <h2>Loads List</h2>
        <div>
          <div>
            <table className="table table-striped table-dark" style={{ marginTop: 10 }}>
              <thead>
                <tr>
                    <th>Load Number</th>
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
                {loadList}
              </tbody>
            </table>
          </div>
          <div>
            {this.renderLoad()}
          </div>
        </div>
      </div>
    );
  }
}
