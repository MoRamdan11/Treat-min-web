import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addService } from "../../Redux/actions/services";
import axios from "axios";
import { fetchServices } from "../../Redux/actions/filterServices";
const AddServicesToRedux = (props) => {
  const services2 = [
    {
      id: 1,
      service: "أشعة مقطعية",
      hospital: "Waddi El-Nile",
      rating: 5,
      waiting: "10 minutes",
      price: 300,
      callus: "16370",
      avaliabledate1: "Today 5:00 pm",
      avaliabledate2: "Tomorrow 4:00 pm",
      avaliabledate3: "Tomorrow 5:00 pm",
    },
    {
      id: 2,
      service: "تحليل دم",
      hospital: "Dar El-Fouad",
      rating: 5,
      waiting: "10 minutes",
      price: 350,
      callus: "16370",
      avaliabledate1: "Today 2:00 pm",
      avaliabledate2: "Tomorrow 1:00 pm",
      avaliabledate3: "Tomorrow 3:00 pm",
    },
    {
      id: 3,
      service: "أشعة مقطعية",
      hospital: "Waddi El-Nile",
      rating: 5,
      waiting: "60 minutes",
      price: 150,
      callus: "16370",
      avaliabledate1: "Today 2:00 pm",
      avaliabledate2: "Tomorrow 1:00 pm",
      avaliabledate3: "Tomorrow 3:00 pm",
    },
    {
      id: 4,
      service: "تحليل دم",
      hospital: "Ain Shams ElTkhossy",
      rating: 3,
      waiting: "15 minutes",
      price: 800,
      callus: "16370",
      avaliabledate1: "Today 2:00 pm",
      avaliabledate2: "Tomorrow 1:00 pm",
      avaliabledate3: "Tomorrow 3:00 pm",
    },
    {
      id: 5,
      service: "أشعة مقطعية",
      hospital: "EL souadi El almany",
      rating: 4,
      waiting: "5 minutes",
      price: 1200,
      callus: "16370",
      avaliabledate1: "Today 2:00 pm",
      avaliabledate2: "Tomorrow 1:00 pm",
      avaliabledate3: "Tomorrow 3:00 pm",
    },
    {
      id: 6,
      service: "رسم قلب",
      hospital: "Electerical",
      rating: 4,
      waiting: "45 minutes",
      price: 3000,
      callus: "16370",
      avaliabledate1: "Today 2:00 pm",
      avaliabledate2: "Tomorrow 1:00 pm",
      avaliabledate3: "Tomorrow 3:00 pm",
    }    
  ];
  const [services, setService] = useState([]);
  useEffect(() => {
    async function fetchServicesData() {
      for (var i = 1; i <= 3; i++) {
        if(props.filters.fetch === true){
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
      /*services2.map((service) => {
        props.dispatch(addService(service))
      });*/
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
    filters: state.filterServices
  };
}
export default connect(mapStateToProps)(AddServicesToRedux);