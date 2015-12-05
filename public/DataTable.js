"use strict";
import React from "react";

class DataTable extends React.Component {
	render(){
var data = this.props.data;
	
	var headers = Object.keys(this.props.data[0]).map(function(item, index, all){
		return	<th>{item}</th>	
	})

	
	 var rows = data.map(function(row, index, all){
	 		console.log(row)
	 		var cells = [];
			for (var prop in row) {
				cells.push(<td>{row[prop]}</td>);
			}
			return <tr> {cells} </tr>
	 })

		return(
			<table>
				<thead>
					<tr>
						{headers}
					</tr>
				</thead>	
					<tbody>
						{rows}
					</tbody>
			</table>
		)
	}
}

module.exports = DataTable;