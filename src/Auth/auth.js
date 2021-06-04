import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../Redux/actions/Auth';
import { setAuth } from '../Redux/actions/Auth';
const Auth = (props) => {
    useEffect(() => {
        if (props.filters.fetch === true) {
            return;
        }
        if (localStorage.getItem('token')) {
            axios.get('/api/accounts/user-data/', {
                headers: {
                    'Authorization': 'Token ' + localStorage.getItem('token')
                }
            }).then((response) => {
                localStorage.setItem('isLogin', 'true');
                props.dispatch(setUserProfile(response.data));
                props.dispatch(setAuth(true));
            })
        }
    }, [])
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

export default connect(mapStateToProps)(Auth);