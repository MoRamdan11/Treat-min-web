import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addRoomEntity } from "../../Redux/actions/specailRoomsEntities";
import { fetchRoomsEntities } from "../../Redux/actions/specialRoomsFilter";
const AddRoomsEntitiesToRedux = (props) => {
    useEffect(() => {
        if (props.filters.fetchEntities === true) {
            return;
        }
        axios.get('/api/rooms/').then((response) => {
            const entities = response.data.rooms;
            console.log('rooms', entities);
            entities.map((entity) => {
                props.dispatch(addRoomEntity(entity));
            });
        }).finally(() => {
            props.dispatch(fetchRoomsEntities(true));
        })
    }, []);
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

export default connect(mapStateToProps)(AddRoomsEntitiesToRedux);