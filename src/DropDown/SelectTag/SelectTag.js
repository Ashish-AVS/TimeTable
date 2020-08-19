import React from 'react';
import classes from './SelectTag.module.css';

const SelectTag=(props)=> {
	let dropItem = {
		code: <div>
			<input style={{ margin: "20px" }} name="subjectCodes" list="code" placeholder="Subject code" />
			<datalist id="code">
				<option value="EEE F111" />
				<option value="CS F111" />
				<option value="MATH F111" />
				<option value="BITS F111" />
				<option value="BIO F111" />
			</datalist>
			</div>,
			name: <div>
		<input style={{ margin: "20px" }} name="subjectCodes" list="code" placeholder="Subject code" />
		<datalist id="code">
			<option value="ELECTRICAL SCIENCES" />
			<option value="COMPUTER SCIENCE" />
			<option value="MATHEMATICS" />
			<option value="THERMODYNAMICS" />
			<option value="GENERAL BIOLOGY" />
		</datalist>
				</div>
	}
	return(
		<div>
			{dropItem.code}
			{dropItem.name}
			
		</div>
	);
}

export default SelectTag;