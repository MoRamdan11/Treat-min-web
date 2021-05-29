import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addHospital } from "../../Redux/actions/hospitals";
import { addCity } from "../../Redux/actions/cities";
import { addRegion } from "../../Redux/actions/regions";
const Hospital = (props) => {
    useEffect(() => {
        async function getHopitals() {
            const data = await axios.get('/api/hospitals/').then((response) => {
                const hospitals = response.data.hospitals;
                hospitals.map((hospital) => {
                    props.dispatch(addHospital(hospital));
                })
            }).catch((error) => {
                console.log(error);
            })
        }
        getHopitals();
    }, [])
    useEffect(() => {
        async function getCities() {
            const data = await axios.get('/api/cities/').then((response) => {
                const cities = response.data.cities;
                cities.map((city) => {
                    props.dispatch(addCity(city));
                })
            })
        }
        getCities();
    }, [])
    useEffect(() => {
        async function getRegions() {
            const data = await axios.get('/api/areas/').then((response) => {
                const regions = response.data.areas;
                regions.map((region) => {
                    props.dispatch(addRegion(region));
                })
            })
        }
        getRegions();
    }, [])
    return (
        <div style={{ height: "0px", width: "0px" }}>
        </div>
    );
}

export default connect()(Hospital);