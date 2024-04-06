/* details :  name - address_1 / address_2 - city - state-province - country - phone - website_url*/
import React, { Component, useEffect, useState } from "react";
import '../styles/brewcall.css'
import { useParams } from "react-router-dom";


const BrewCall = () => {
    let { id } = useParams();
    const [fullDetails, setFullDetails] = useState(null);

    useEffect(() => {
        const fetchBreweries = async () =>{
            const response = await fetch(
                `https://api.openbrewerydb.org/v1/breweries?by_ids=${id}`);
            const json = await response.json();
            console.log(json[0]);
            setFullDetails(json[0]);
            }
        if (id){
            fetchBreweries();
        }
    fetchBreweries().catch(console.error);
    }, [id]);

    return(
        <div className="detailBrew">
            <h2>{fullDetails && fullDetails.name}</h2>
            <h3>{fullDetails && fullDetails.address_1}, {fullDetails && fullDetails.city}</h3>
            <h3>{fullDetails && fullDetails.state_province} - {fullDetails && fullDetails.country}</h3>
            <a href={fullDetails && fullDetails.website_url}>Brew Link</a>
            
        </div>
    )
}

export default BrewCall;