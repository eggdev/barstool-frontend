import React, { Fragment, useState } from 'react';
import _ from 'lodash';
import Period from 'Atoms/Period/Period.jsx';

import './ScoreBoardRow.scss';

const ScoreBoardRow = (props) => {
    let gameScore = 0;
    const { location, gameData } = props;
    // const periodScores = gameData[`${location}_period_scores`];
    const periodScores = [1, 2, 3];
    const teamInfo = gameData[`${location}_team`];
    const remainingPeriods = (gameData.league === 'MLB') ? 9 - periodScores.length : 4 - periodScores.length;

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
            {_.times(remainingPeriods, (index) => {
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