import React from "react";
import MyHexagon from "./MyHexagon";
import axios from "axios";
import{ getAllUrl } from "../config/config";
import { GridGenerator, HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';

const Canvas = props => {
    
    // const moreHexas = GridGenerator.parallelogram(0, 20, 0, 3);

    // const getHexagons = getAllReq({
    //     url: ''
    // }).then(res => {
    //     console.log(res);

    // }).catch(error => {
    //     console.log(error);
    // })


    return(
        <div>

            <MyHexagon />


        </div>
    );
};

function getAllReq (config) {
    return new Promise(
        (resolve, reject)=>{
            const request1 = axios.create({
                baseURL: 'http://localhost:3000/mock.json',
                timeout: 100000,
                
            })
            request1(config)
            .then(
                res => {
                    resolve(res)
                }
            )
            .catch(error => {
                reject(error)
            })
        }
    );
}

export default Canvas;