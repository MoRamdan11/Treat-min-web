import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addHospital } from "../../Redux/actions/hospitals";
import { addCity } from "../../Redux/actions/cities";
import { addRegion } from "../../Redux/actions/regions";
import { setFetchHospitals, setFetchCities, setFetchRegions } from "../../Redux/actions/filterClinics";
const Hospital = (props) => {
    useEffect(() => {
        async function getHopitals() {
            if (props.filters.fetchHospital) {
                return;
            }
            const data = await axios.get('/api/hospitals/').then((response) => {
                const hospitals = response.data.hospitals;
                hospitals.map((hospital) => {
                    if(hospital.name === 'test' || hospital.name === 'Test_Hospital_Api' || hospital.name === "elamal"){
                        return;
                    }
                    props.dispatch(addHospital(hospital));
                })
                props.dispatch(setFetchHospitals(true));
            }).catch((error) => {
                console.log(error);
            })
        }
        getHopitals();
    }, [])
    useEffect(() => {
        async function getCities() {
            if (props.filters.fetchCity) {
                return;
            }
            const data = await axios.get('/api/cities/').then((response) => {
                const cities = response.data.cities;
                cities.map((city) => {
                    props.dispatch(addCity(city));
                })
                props.dispatch(setFetchCities(true));
            })
        }
        getCities();
    }, [])
    useEffect(() => {
        async function getRegions() {
            if (props.filters.fetchRegion) {
                return;
            }
            const data = await axios.get('/api/areas/').then((response) => {
                const regions = response.data.areas;
                regions.map((region) => {
                    props.dispatch(addRegion(region));
                })
                props.dispatch(setFetchRegions(true));
            })
        }
        getRegions();
    }, [])
    return (
        <div style={{ height: "0px", width: "0px" }}>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        filters: state.fetching
    };
}
export default connect(mapStateToProps)(Hospital);