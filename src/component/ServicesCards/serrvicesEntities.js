import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addServiceEntity } from "../../Redux/actions/servicesEntities";
import { fetchServicesEntities } from "../../Redux/actions/filterServices";
const AddServicesEntitiesToRedux = (props) => {
    useEffect(() => {
        if (props.filters.fetchEntities === true) {
            return;
        }
        axios.get('/api/services/').then((response) => {
            const entities = response.data.services;
            entities.map((entity) => {
                props.dispatch(addServiceEntity(entity));
            });
        }).finally(() => {
            props.dispatch(fetchServicesEntities(true));
        })
    }, []);
    return (
        <div style={{ height: "0px", width: "0px" }}>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        filters: state.filterServices
    };
}

export default connect(mapStateToProps)(AddServicesEntitiesToRedux);