import React, { Component } from 'react';
import HexagonContextProvider from "./context/HexagonContext";
import { BrowserRouter as Router, Route, Switch, Redirect, Link} from "react-router-dom";
import axios from "axios";
import Loader from "./components/Loader";
import './App.css';
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';

class App extends Component {

   constructor(props) {
     super(props);
     this.state = {
       list: [],
       loaded: false
     }
   }
  
  componentWillMount(){
    axios.get("http://150.158.237.17:10050/getAll").then((res)=>{
                            this.setState({
                              list:res.data,
                              loaded:true
                           })
                        })
  }



  render () {
    return (
        <div>
        { this.state.loaded ?
          <HexGrid width={1200} height={800} viewBox="0 -10 100 100">
          <Layout size={{ x: 2, y: 2 }} origin={{ x: 0, y: 0 }}>
            {
              this.state.list.data ?
              this.state.list.data.map(
                (hex) => {
                  if (hex.status){
                  return (
                    <Hexagon key={hex.name} q={hex.r} r={hex.c} s="0" />
                  )}
                }
              ):null
            }
          </Layout>
          </HexGrid>
          :
          <Loader />
        }
        </div>
     
    );
  }
}

export default App;
