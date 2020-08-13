import React, { Component } from 'react';
import classes from './DropDown.module.css';
import MiniCard from '../Mini-Card/MiniCard';

class DropDown extends Component {
	state = {
		width:0,
		visibility:"hidden"
	}
	closeNav = () => {
		this.setState({
			width: '0',
			visibility: 'visible'
		});
	}
	openNav = () => {
	this.setState({
		width:'250px',
		visibility:'hidden'
	});
	}

	render() {
		return (
			<div>
				<div style={{width:this.state.width}} className={classes.sidebar}>
					<div>
						<form>
							<div>
								<select>
									<option value="1">1</option>
								</select>
							</div>
							<div>
								<select>
									<option value="1">1</option>
								</select>
							</div>
							<div>
								<select>
									<option value="1">1</option>
								</select>
							</div>
							<div>
								<select>
									<option value="1">1</option>
								</select>
							</div>
						</form>
					</div>
					<div>
						<button className={classes.closebtn} onClick={this.closeNav}>Enter</button>
					</div>
				</div>

				<div className={classes.main}>
					<button className={classes.openbtn} onClick={this.openNav}>&#9776;</button>
				</div>
			</div>
		);
	}

}

export default DropDown;