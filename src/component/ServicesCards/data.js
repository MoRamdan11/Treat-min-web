import React from "react";
import { connect } from "react-redux";
import { addService } from "../../Redux/actions/services";

const AddServicesToRedux = (props) => {
  const services = [
    {
      id: 1,
      avatar: "BT",
      service: "Blood Test",
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
      avatar: "XR",
      service: "X-Ray",
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
      avatar: "IN",
      service: "Incabsulation",
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
      avatar: "MN",
      service: "Resonance Ray",
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
      avatar: "SA",
      service: "Transsectional Ray",
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
      avatar: "E",
      service: "DNA Test",
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
  return (
    <div style = {{height: "0px", width: "0px"}}>
      {services.map((service) => {props.dispatch(addService(service));})}
    </div>
  ); 
}

export default connect()(AddServicesToRedux);