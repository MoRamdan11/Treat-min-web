import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { addSpecialRoom } from "../../Redux/actions/specialRooms";
import { fetchRooms } from "../../Redux/actions/specialRoomsFilter";
import axios from 'axios';
const AddSpecialRoomsToRedux = (props) => {
  const specialRooms2 = [
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
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    async function fetchRoomsData() {
      for (var i = 1; i <= 3; i++) {
        if (props.filters.fetch === true) {
          return
        }
        const data = await axios.get(`api/rooms/${i}/details/`).then((response) => {
          const roomData = response.data.details.map((card) => ({
            ...card,
            api: i,
            room: response.data.entity,
            services: []
          }));
          let serv = rooms;
          serv.push(...roomData);
          setRooms(serv);
        }).catch((error) => {
          console.log(error);
        }).finally(() => {
          console.log('finalRooms', rooms);
          rooms.map((room) => {
            props.dispatch(addSpecialRoom(room))
          });
          setRooms([]);
        })
      }
      specialRooms2.map((room) => {
        props.dispatch(addSpecialRoom(room))
      });
      props.dispatch(fetchRooms(true));
    }
    fetchRoomsData();
  }, [])
  return (
    <div style={{ height: "0px", width: "0px" }}>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    filters: state.filterSpecialRooms
  };
}
export default connect(mapStateToProps)(AddSpecialRoomsToRedux);