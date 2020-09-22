import React, { useContext, useEffect } from "react";
import { HexagonContext } from "../context/HexagonContext";
import Canvas from "./Canvas";
import Loader from "./Loader";

const Container = () => {
    const { hexagons, loading, runGetAll} = useContext(HexagonContext);
    useEffect(
        () => {
            runGetAll();
        }
    );

    return(
        <div classname="hexagons-container">
            {loading ? <Loader /> : <Canvas data={hexagons} />}
        </div>
    );
};

export default Container;