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
    for (var i = 1; i <= 40; i++) {
      if (this.props.filters.fetchServices === true) {
        break;
      }
      const data = await axios.get(`/api/services/${i}/schedules/`).then((response) => {
        const drData = response.data.details.map((card) => ({
          ...card,
          api: i,
          service: response.data.entity
        }))
        //this.setState({ doctors: [...this.state.doctors, ...drData] });
        drData.map((doctor) => {
          this.props.addService(doctor);
        })
      }).catch(() => {
      })
    }
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




/*import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addService } from "../../Redux/actions/services";
import axios from "axios";
import { fetchServices } from "../../Redux/actions/filterServices";
const AddServicesToRedux = (props) => {
  const [services, setService] = useState([]);
  useEffect(() => {
    async function fetchServicesData() {
      for (var i = 1; i <= 40; i++) {
        if(props.filters.fetchServices === true){
          break;
        }
        const data = await axios.get(`api/services/${i}/schedules/`).then((response) => {
          const serviceData = response.data.details.map((card) => ({
            ...card,
            api: i,
            service: response.data.entity
          }));
          let serv = services;
          serv.push(...serviceData);
          setService(serv);
        }).finally(() => {
          services.map((service) => {
            props.dispatch(addService(service))
          });
          setService([]);
        })
      }
      props.dispatch(fetchServices(true));
    }
    fetchServicesData();
  }, [])
  
  return (
    <div style = {{height: "0px", width: "0px"}}>
    </div>
  ); 
}
const mapStateToProps = (state) => {
  return {
    filters: state.fetching
  };
}
export default connect(mapStateToProps)(AddServicesToRedux);*/