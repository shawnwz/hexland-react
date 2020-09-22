import React, { createContext, useState } from "react";
import axios from "axios";
import{ getAllUrl } from "../config/config";
export const HexagonContext = createContext();

const HexagonContextProvider = props => {
    const [hexagons, setHexagons] = useState([]);
    const [loading, setLoading] = useState([]);
    const runGetAll = getAll => {
        axios.get(getAllUrl)
        .then(
            response => {
                setHexagons(response.data);
                setLoading(false);
            }
        ).catch(error => {
            console.log("error when getting all...", error);
        })

    };
    return(
        <HexagonContext.Provider value={{ hexagons, loading, runGetAll}}>
            {props.childer}
        </HexagonContext.Provider>
    );

};

export default HexagonContextProvider;