import axios from "axios";

const API = {};

(function (API) {
  API.loads = API.loads || {};
  API.contacts = API.contacts || {};

  API.loads.show = async function (obj) {
    let loads = await axios.get(`http://localhost:4000/loads/${obj._id}`)
      .then(response => {
        const { data } = response;
        return data;
      })
      .catch(function(error) {
        console.log(error);
        return { "error": "Could not list loads." }
      });

    return loads;
  };
  API.loads.list = async function () {
    let loads = await axios.get("http://localhost:4000/loads/")
      .then(response => {
        const { data } = response;
        return data;
      })
      .catch(function(error) {
        console.log(error);
        return { "error": "Could not list loads." }
      });

    return loads;
  };
  API.loads.update = async function (data) {
    const { _id } = data;
    delete data._id;
    const postRequest = {
      "method": "post",
      "url": `http://localhost:4000/loads/update/${_id}`,
      data
    };
    let loads = await axios(postRequest)
      .then(response => {
        const { data } = response;
        return data;
      })
      .catch(function(error) {
        console.log(error);
        return { "error": "Could not list loads." }
      });
    return loads;
  };
  API.loads.new = async function (data) {
    const postRequest = {
      "method": "post",
      "url": `http://localhost:4000/loads/add`,
      data
    } ;
    let loads = await axios(postRequest)
      .then(response => {
        const { data } = response;
        return data;
      })
      .catch(function(error) {
        console.log(error);
        return { "error": "Could not add load" }
      });
    return loads;
  };
  API.loads.delete = async function (data) {
    const { _id } = data;
    // delete data._id;
    const postRequest = {
      "method": "delete",
      "url": `http://localhost:4000/loads/delete/${_id}`,
    };
    let loads = axios(postRequest)
      .then(response => {
        const { data } = response;
        return data;
      })
      .catch(function(error) {
        console.log(error);
        return { "error": "Could not delete load" }
      });

    return loads;
  };

  API.contacts.show = async function (obj) {};
  API.contacts.list = async function () {};
  API.contacts.update = async function () {};
  API.contacts.new = async function () {};
  API.contacts.delete = async function () {};

})(API);

export default API;