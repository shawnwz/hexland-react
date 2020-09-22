import React from "react";
import axios from "axios";
import { GridGenerator, HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
class MyHexagon extends React.Component{
  componentDidMount(){
    axios.get("http://localhost:3000/mock.json").then((res)=>{
                            this.setState({
                              list:res.data
                           })
                        })
  }

  render(){
    return(
      <div className="MyHexagon">
        <h2>Hexgrid </h2>
        <p>Constructing Hexgrid.</p>
        <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
          {/* Main grid with bit hexagons, all manual */}

          {/* Additional small grid, hexagons generated with generator */}
          <Layout size={{ x: 2, y: 2 }} origin={{ x: 50, y: -30 }}>
            { this.state.list.data.map((hex, i) => <Hexagon key={hex.name} q={hex.r} r={hex.c} s="0" />) }
          </Layout>

        </HexGrid>
      </div>
    )
  }
}

export default MyHexagon;