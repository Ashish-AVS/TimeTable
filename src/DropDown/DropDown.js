import React, { Component } from 'react';
import classes from './DropDown.module.css';
import MiniCard from '../Mini-Card/MiniCard';
import SelectTag from './SelectTag/SelectTag';

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
						<div>
							<button className={classes.closeopt} onClick={this.closeNav}>X</button>
						</div>
						<form>
								<SelectTag />
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