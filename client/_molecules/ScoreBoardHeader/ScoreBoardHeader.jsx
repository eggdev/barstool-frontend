import React, { Fragment, useState } from 'react';
import times from 'lodash/times';

import Period from 'Atoms/Period/Period.jsx';

import './ScoreBoardHeader.scss';

const ScoreBoardHeader = (props) => {
    const { totalPeriods, leagueName } = props;

    return (
        <div className="score-board-header">
            <Period
                value={(leagueName === 'MLB') ? 'INN' : leagueName === 'NHL' ? 'PER' : 'QTR'}
                dataType="team"
            />
            {times(totalPeriods, (index) => {
                return (
                    <Period
                        key={index + 1}
                        value={index + 1}
                        dataType="score"
                    />
                )
            })}
            {(leagueName === 'MLB') ? (
                <Fragment>
                    <Period
                        value="R"
                        dataType="finals"
                    />
                    <Period
                        value="H"
                        dataType="finals"
                    />
                    <Period
                        value="E"
                        dataType="finals"
                    />
                </Fragment>
            ) : (
                <Period
                    value="T"
                    dataType="finals"
                />
            )}
        </div>
    )
}

export default ScoreBoardHeader;