import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addEntity } from "../../Redux/actions/entities";
import { fetchEntities } from "../../Redux/actions/filterClinics";
const AddEntitiesToRedux = (props) => {
    useEffect(() => {
        if (props.filters.fetchEntities === true) {
            return;
        }
        axios.get('/api/clinics/').then((response) => {
            const entities = response.data.clinics;
            console.log('DrEntities', entities);
            entities.map((entity) => {
                props.dispatch(addEntity(entity));
            });
        }).catch((error) => {
            console.log('error', error);
        }).finally(() => {
            props.dispatch(fetchEntities(true));
        })
    }, []);
    return (
        <div style={{ height: "0px", width: "0px" }}>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        filters: state.filterClinics
    };
}

export default connect(mapStateToProps)(AddEntitiesToRedux);