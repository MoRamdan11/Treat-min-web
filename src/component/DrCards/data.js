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
      }).catch((error) => {
        console.log(error);
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

/*
import React from "react";
import { connect } from "react-redux";
import { addClinic } from "../../Redux/actions/clinics";
import axios from "axios";
import { fetchClinic } from "../../Redux/actions/filterClinics";

class AddDataToRedux extends React.Component{
  state={
    doctors: [],
    fetched: true
  }
  async componentDidMount(){
    for(var i = 1; i <= 29; i++){
      if(this.props.filters.fetch === false){
        break;
      }
      const data = await axios.get(`/api/clinics/${i}/details/`).then((response) => {
        //axios.get(`/api/clinics/${i}/details/${}/schedules`)
        console.log('hantyCanty', response.data.details);
        console.log('Length', response.data.details.length);
        var drData = response.data.details.map((card) => ({
          ...card,
          specalist: response.data.entity
        }));
        this.setState({doctors: [...this.state.doctors, ...drData]});
        for(var j = 0; j < response.data.details.length; j++){
          const schedules = axios.get(`/api/clinics/${i}/details/${response.data.details[j].id}/schedules`).then((response) => {
            drData = drData.map((card) => ({
              ...card,
              schedules: response.data.schedules
            }));
          })
          console.log('id', response.data.details[j].id);
        }
        //this.setState({doctors: [...this.state.doctors, ...drData]});
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        console.log('finalCardfinL',  this.state.doctors);
        this.state.doctors.map((doctor) => {
          this.props.addClinic(doctor);
        });
        this.setState({doctors: []});
      })
    }
    this.props.fetchClinic(false);
  }
  render(){
    return(
    <div style={{ height: "0px", width: "0px" }}>
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filterClinics
  };
}

const mapDispatchToProps = {
  addClinic,
  fetchClinic
};
export default connect(mapStateToProps, mapDispatchToProps)(AddDataToRedux);
*/
/*function areEqual(props) {
  return props.filters.fetch;

  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false

}
const mapStateToProps2 = (state) => {
  return {
    filters: state.filterClinics
  };
}
export default connect(mapStateToProps2)(React.memo(Connected, areEqual));*/