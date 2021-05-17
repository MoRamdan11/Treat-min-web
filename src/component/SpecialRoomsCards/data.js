import React from "react";
import { connect } from "react-redux";
import { addSpecialRoom } from "../../Redux/actions/specialRooms";
const AddSpecialRoomsToRedux = (props) => {
  const specialRooms = [
    {
      avatar: "#1",
      room: "Intensive treatment",
      hospital: "Daar El fouad",
      rating: 5,
      waiting: "10 minutes",
      price: 300,
      callus: "16370",
      avaliabledate1: "Today 5:00 pm",
      avaliabledate2: "Tomorrow 4:00 pm",
      avaliabledate3: "Tomorrow 5:00 pm",
      services: {
        beds: 2,
        wifi: true
      },
    },
    {
      avatar: "#2",
      room: "Covid",
      hospital: "Daar EL-FOUAD",
      rating: 5,
      waiting: "10 minutes",
      price: 100,
      callus: "16370",
      avaliabledate1: "Today 5:00 pm",
      avaliabledate2: "Tomorrow 4:00 pm",
      avaliabledate3: "Tomorrow 5:00 pm",
      services: {
        beds: 4,
        fridge: true
      },
    },
    {
      avatar: "#3",
      room: "Labor",
      hospital: "Daar EL-FOUAD",
      rating: 5,
      waiting: "10 minutes",
      price: 400,
      callus: "16370",
      avaliabledate1: "Today 5:00 pm",
      avaliabledate2: "Tomorrow 4:00 pm",
      avaliabledate3: "Tomorrow 5:00 pm",
      services: {
        wifi: true,
        beds: 6,
        tv: true,
        fridge: true
      },
    },
    {
      avatar: "#1",
      room: "Labor",
      hospital: "Wadi-El-Nile",
      rating: 5,
      waiting: "10 minutes",
      price: 50,
      callus: "16370",
      avaliabledate1: "Today 5:00 pm",
      avaliabledate2: "Tomorrow 4:00 pm",
      avaliabledate3: "Tomorrow 5:00 pm",
      services: {},
    },
    {
      avatar: "#2",
      room: "Intensive treatment",
      hospital: "Wadi-El-Nile",
      rating: 5,
      waiting: "10 minutes",
      price: 1000,
      callus: "16370",
      avaliabledate1: "Today 5:00 pm",
      avaliabledate2: "Tomorrow 4:00 pm",
      avaliabledate3: "Tomorrow 5:00 pm",
      services: {},
    },
    {
      avatar: "#3",
      room: "Covid",
      hospital: "Wadi-El-Nile",
      rating: 5,
      waiting: "10 minutes",
      price: 200,
      callus: "16370",
      avaliabledate1: "Today 5:00 pm",
      avaliabledate2: "Tomorrow 4:00 pm",
      avaliabledate3: "Tomorrow 5:00 pm",
      services: {},
    },
  ];
  return(
    <div style = {{height: "0px", width: "0px"}}>
      {specialRooms.map((specialRoom) => {props.dispatch(addSpecialRoom(specialRoom));})}
    </div>
  );  
}

export default connect()(AddSpecialRoomsToRedux);