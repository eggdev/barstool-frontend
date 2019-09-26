import React, { Fragment, useState } from 'react';
import times from 'lodash/times';
import Period from 'Atoms/Period/Period.jsx';

import './ScoreBoardRow.scss';

const ScoreBoardRow = (props) => {
    const { location, gameData, totalPeriods } = props;
    let gameScore = 0;
    const periodScores = gameData[`${location}_period_scores`];
    const teamInfo = gameData[`${location}_team`];
    const remainingPeriods = totalPeriods - periodScores.length;

    return (
        <div className="team-data" id={location}>
            <Period
                value={teamInfo.abbreviation}
                dataType="team"
            />
            {periodScores.map((score, index) => {
                gameScore += score;
                return (
                    <Period
                        key={index + 1}
                        value={score}
                        dataType="score"
                    />
                )
            })}
            {times(remainingPeriods, (index) => {
                return (
                    <Period
                        key={index + 1}
                        value="-"
                        dataType="score"
                    />
                )
            })}
            {(gameData.league === 'MLB') ? (
                <Fragment>
                    <Period
                        value={gameScore}
                        dataType="finals"
                    />
                    <Period
                        value={gameData[`${location}_batter_totals`].hits}
                        dataType="finals"
                    />
                    <Period
                        value={gameData[`${location}_errors`]}
                        dataType="finals"
                    />
                </Fragment>
            ) : (
                <Fragment>
                    <Period
                        value={gameScore}
                        dataType="finals"
                    />
                </Fragment>
            )}
            
        </div>
    )
}

export default ScoreBoardRow;