import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const Auth = (props) => {
    useEffect(() => {
        if(props.filters.fetch === false){
            return;
        }
         if(localStorage.getItem('token')){
             axios.get('/api/accounts/user-data/', {
                 headers:{
                     'Authorization': 'Token ' + localStorage.getItem('token')
                 }
             }).then(() => {
                 console.log("Mo");
                 localStorage.setItem('isLogin', 'true');
             }).catch(() => {
                //localStorage.setItem('isLogin', 'false');
             })
         }
    }, [])
    return(
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