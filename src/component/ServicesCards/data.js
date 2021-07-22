import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { addService } from "../../Redux/actions/services";
import { fetchServices } from "../../Redux/actions/filterServices";

class AddServicesToRedux extends React.Component {
  state = {
    doctors: [],
    fetched: true
  }
  async componentDidMount() {
    if (this.props.filters.fetchServices === true) {
      return;
    }
    const data = await axios.get('https://mnodejsapp.herokuapp.com/api/services').then((response) =>{
      const drData = response.data.map((card) => ({
        ...card,
        api: card.i,
      }))
      drData.map((doctor) => {
        this.props.addService(doctor);
      })
    }).catch((e) => {
      console.log('error', e);
    })
    this.props.fetchServices(true);
  }
  render() {
    return (
      <div style={{ height: "0px", width: "0px" }}>
      </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.fetching
  };
}

const mapDispatchToProps = {
  addService,
  fetchServices
};
export default connect(mapStateToProps, mapDispatchToProps)(AddServicesToRedux);