import React from 'react';
import classes from './Card.module.css';
import meetLinks from '../Links/MeetLinks';
import DriveLinks from '../Links/DriveLinks';

const Card = (props) => {
	let newCode=props.code;

	return(
		<div className={classes.card}>
			<div>
				<a target="_blank" href={meetLinks[newCode]}>{props.displayCode}</a>
			</div>
			<div>
				<a target="_blank" href={DriveLinks[newCode]}>{props.sub}</a>
			</div>
			<div>
				{props.type}
			</div>
		</div>
	);
}

export default Card;