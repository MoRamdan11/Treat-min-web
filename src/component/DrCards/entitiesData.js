import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addEntity } from "../../Redux/actions/entities";
import { fetchEntities } from "../../Redux/actions/filterClinics";
const AddEntitiesToRedux = (props) => {
    useEffect(() => {
        if (props.filters.fetchEntities === false) {
            return;
        }
        axios.get('/api/clinics/').then((response) => {
            const entities = response.data.clinics;
            entities.map((entity) => {
                props.dispatch(addEntity(entity));
            });
        }).finally(() => {
            props.dispatch(fetchEntities(false));
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