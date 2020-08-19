import React from 'react';
import classes from './Card.module.css';
import meetLinks from '../MeetLinks/MeetLinks';

const Card = (props) => {
	let newCode=props.code;

	return(
		<div className={classes.card}>
			<div>
				<a href={meetLinks[newCode]}>{props.displayCode}</a>
			</div>
			<div>
				{props.sub}
			</div>
			<div>
				{props.type}
			</div>
		</div>
	);
}

export default Card;