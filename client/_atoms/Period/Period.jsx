import React from 'react';

import './Period.scss';

const Period = (props) => {
    return (
        <div className={`period ${props.dataType}`}>
            <p>{props.value}</p>
        </div>
    )
}

export default Period;