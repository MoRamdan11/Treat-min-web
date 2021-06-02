import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addService } from "../../Redux/actions/services";
import axios from "axios";
import { fetchServices } from "../../Redux/actions/filterServices";
const AddServicesToRedux = (props) => {
  const [services, setService] = useState([]);
  useEffect(() => {
    async function fetchServicesData() {
      for (var i = 1; i <= 3; i++) {
        if(props.filters.fetchServices === true){
          return
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
        }).catch((error) => {
          console.log(error);
        }).finally(() => {
          console.log('finalservice', services);
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
export default connect(mapStateToProps)(AddServicesToRedux);