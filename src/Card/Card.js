import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
	return(
		<div className={classes.card}>
			<div>
				{props.code}
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