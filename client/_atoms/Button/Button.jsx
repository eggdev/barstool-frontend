import React from 'react';
import './Button.scss';

const Button = (props) => {
	return (
		<div
			role="button"
			tabIndex="0"
            onClick={() => props.action(props.label.toLowerCase())}
            onKeyUp={() => props.action(props.label.toLowerCase())}
            className={`btn ${props.className}`}
		>
			{props.label}
		</div>
	);
}

export default Button;