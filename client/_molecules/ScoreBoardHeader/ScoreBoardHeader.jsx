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
            {(leagueName === 'MLB') ? (
                <Fragment>
                    <Period
                        value="RUNS"
                        dataType="finals-header"
                    />
                    <Period
                        value="HITS"
                        dataType="finals-header"
                    />
                    <Period
                        value="ERR"
                        dataType="finals-header"
                    />
                </Fragment>
            ) : (
                <Period
                    value="T"
                    dataType="finals-header"
                />
            )}
        </div>
    )
}

export default ScoreBoardHeader;