import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'

class Loads extends Component {
    state = {
        loads: [],
        newLoad: {
            load_number: "",
            load_driver_name: "",
            load_rate: "",
            load_tractor_number: "",
            load_trailer_number: "",
            load_pu_date: "",
            load_del_date: "",
            load_pu_location: "",
            load_del_location: "", 
        },
        isLoadFormDisplayed: false
    }
    componentDidMount = () => {
        axios.get
    }
}