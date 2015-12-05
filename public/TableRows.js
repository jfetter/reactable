"use strict";
import React from "react";
import Data1 from "./script"
import Data2 from "./script"

var data = Data1;

class TableRows extends React.Component {
	render(){	
		console.log(this.props.tableRow)
		return
	

	}
}

let rows = data.map(row, index => <TableRows  />);

ReactDOM.render(
	<TableRows>
		{rows}
	</TableRows>,

	DataTable);



module.exports = TableRow; 