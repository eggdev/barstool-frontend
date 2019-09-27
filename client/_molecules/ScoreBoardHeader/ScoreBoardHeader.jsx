import React, { Fragment, useState } from 'react';
import times from 'lodash/times';

import Period from 'Atoms/Period/Period.jsx';

import './ScoreBoardHeader.scss';

const ScoreBoardHeader = (props) => {
    const { totalPeriods, leagueName } = props;

    return (
        <div className="score-board-header">
            <Period
                value={(leagueName === 'MLB') ? '' : leagueName === 'NHL' ? 'PER' : 'QTR'}
                dataType="team-header"
            />
            {times(totalPeriods, (index) => {
                return (
                    <Period
                        key={index + 1}
                        value={index + 1}
                        dataType="header"
                    />
                )
            })}
            <Period
                value={`${leagueName === 'MLB' ? 'R' : 'T'}`}
                dataType="finals-header"
            />
            {(leagueName === 'MLB') && (
                <Fragment>
                    <Period
                        value="H"
                        dataType="finals-header"
                    />
                    <Period
                        value="E"
                        dataType="finals-header"
                    />
                </Fragment>
            )}
        </div>
    )
}

export default ScoreBoardHeader;