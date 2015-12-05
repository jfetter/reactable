"use strict";
import React from "react";
import Data1 from "./script"
import Data2 from "./script"

var data = Data1;

class DataCells extends React.Component {
	render(){
		return
		console.log(this.props.children)
			// <td> {...data} </td>

	}
}

let rowData = data.map(datum, index => <DataCells children />);

ReactDOM.render(
	<DataCells>
		{rowData}
	</DataCells>,

	);


module.exports = DataCells; 