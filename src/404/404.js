import React from 'react';
import classes from './404.module.css';

const four=() => {
	return(
		<div className={classes.mainbox}>
			<div className={classes.err}>4</div>
					<i className="far fa-question-circle fa-spin"></i>
			<div className={classes.err2}>4</div>
			<div className={classes.msg}>Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <a href="#">home</a> and try from there.</p></div>
				</div>
	);
}

export default four;