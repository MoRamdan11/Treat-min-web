import React from "react";
import { connect } from "react-redux";
import { addClinic } from "../../Redux/actions/clinics";
import axios from "axios";
import { fetchClinic } from "../../Redux/actions/filterClinics";

class AddDataToRedux extends React.Component {
  state = {
    doctors: [],
    fetched: true
  }
  async componentDidMount() {
    for (var i = 1; i <= 29; i++) {
      if (this.props.filters.fetch === true) {
        break;
      }
      const data = await axios.get(`/api/clinics/${i}/schedules/`).then((response) => {
        const drData = response.data.details.map((card) => ({
          ...card,
          api: i,
          specalist: response.data.entity
        }))
        //this.setState({ doctors: [...this.state.doctors, ...drData] });
        drData.map((doctor) => {
          this.props.addClinic(doctor);
        })
      })
    }
    this.props.fetchClinic(true);
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
  addClinic,
  fetchClinic
};
export default connect(mapStateToProps, mapDispatchToProps)(AddDataToRedux);