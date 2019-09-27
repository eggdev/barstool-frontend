import React, { Component, Fragment, Suspense, lazy } from 'react';

// Molecules
import Header from 'Molecules/Header/Header.jsx';
import Loading from 'Molecules/Loading/Loading.jsx';

import { gatherGameData } from 'Utilities/tools.js';

import './Index.scss';

const Scoreboard = lazy(() => import('Organisms/Scoreboard/Scoreboard.jsx'));

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSport: 'mlb',
            gameData: {},
            appData: {},
            loaded: false,
        }
    }

    componentDidMount() {
        this.getSportData(this.state.currentSport);
    }

    getSportData = async (sportName) => {
        const newData = await gatherGameData(sportName);
        this.setState({ 
            gameData: newData,
            loaded: true,
        });
    }


    toggleSport = (sportName) => {
        this.setState({ currentSport: sportName });
        this.getSportData(sportName);
    }

    render() {
        const { currentSport, gameData, loaded } = this.state;

        return (
            <div className={`index-container ${currentSport}`}>
                <Header
                    toggleSport={this.toggleSport}
                    currentSport={currentSport}
                />
                {loaded ? (
                    <Scoreboard
                        gameData={gameData}
                    />
                ) : (
                    <Loading />
                )}
            </div>
        );
    }   
}

export default Index;