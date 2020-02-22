import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const data = [
        {
            'name': 'Stage1',
        },
        {
            'name': 'Stage2',
        }
    ];
    var treeData =
    {
        "name": "Top Level",
        "children": [
            {
                "name": "Level 2: A",
                "children": [
                    { "name": "Son of A" },
                    { "name": "Daughter of A" }
                ]
            },
            { "name": "Level 2: B" }
        ]
    };
    const boxes = data.map(stage => (<div>{stage.name}</div>));


    return (
        <div className="App">
            <div id="main">
                <div id="left">
                    <div id="top">
                        <div class="round round-1">
                            <div class="box">
                                <div class="knocked-out team-name">Team name</div>
                                <div class="selected team-name">Team name</div>
                            </div>
                            <div class="box">
                                <div class="team-name">Team name</div>
                                <div class="team-name">Team name</div>
                            </div>
                            <div class="box">
                                <div class="team-name">Team name</div>
                                <div class="team-name">Team name</div>
                            </div>
                            <div class="box">
                                <div class="team-name">Team name</div>
                                <div class="team-name">Team name</div>
                            </div>
                        </div>
                        <div class="round round-2">
                            <div class="box">
                                <div class="team-name">Team name</div>
                                <div class="team-name">Team name</div>
                            </div>
                            <div class="box">
                                <div class="team-name">Team name</div>
                                <div class="team-name">Team name</div>
                            </div>
                        </div>
                        <div class="round round-3">
                            <div class="box">
                                <div class="team-name">Team name</div>
                                <div class="team-name">Team name</div>
                            </div>
                        </div>
                    </div>

                    <div id="bottom">
                    <div class="round round-1">
                            <div class="box">
                                <div class="knocked-out team-name">Team name</div>
                                <div class="selected team-name">Team name</div>
                            </div>
                            <div class="box">
                                <div class="team-name">Team name</div>
                                <div class="team-name">Team name</div>
                            </div>
                            <div class="box">
                                <div class="team-name">Team name</div>
                                <div class="team-name">Team name</div>
                            </div>
                            <div class="box">
                                <div class="team-name">Team name</div>
                                <div class="team-name">Team name</div>
                            </div>
                        </div>
                        <div class="round round-2">
                            <div class="box">
                                <div class="team-name">Team name</div>
                                <div class="team-name">Team name</div>
                            </div>
                            <div class="box">
                                <div class="team-name">Team name</div>
                                <div class="team-name">Team name</div>
                            </div>
                        </div>
                        <div class="round round-3">
                            <div class="box">
                                <div class="team-name">Team name</div>
                                <div class="team-name">Team name</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="center">
                    WINNER
                </div>
                <div id="right">
                    <div id="top">
                    <div class="round round-1">
                            <div class="box">
                                <div class="knocked-out team-name">Team name</div>
                                <div class="selected team-name">Team name</div>
                            </div>
                            <div class="box">
                                <div class="team-name">Team name</div>
                                <div class="team-name">Team name</div>
                            </div>
                            <div class="box">
                                <div class="team-name">Team name</div>
                                <div class="team-name">Team name</div>
                            </div>
                            <div class="box">
                                <div class="team-name">Team name</div>
                                <div class="team-name">Team name</div>
                            </div>
                        </div>
                        <div class="round round-2">
                            <div class="box">
                                <div class="team-name">Team name</div>
                                <div class="team-name">Team name</div>
                            </div>
                            <div class="box">
                                <div class="team-name">Team name</div>
                                <div class="team-name">Team name</div>
                            </div>
                        </div>
                        <div class="round round-3">
                            <div class="box">
                                <div class="team-name">Team name</div>
                                <div class="team-name">Team name</div>
                            </div>
                        </div>
                    </div>
                    <div id="bottom">
                    <div class="round round-1">
                            <div class="box">
                                <div class="knocked-out team-name">Team name</div>
                                <div class="selected team-name">Team name</div>
                            </div>
                            <div class="box">
                                <div class="team-name">Team name</div>
                                <div class="team-name">Team name</div>
                            </div>
                            <div class="box">
                                <div class="team-name">Team name</div>
                                <div class="team-name">Team name</div>
                            </div>
                            <div class="box">
                                <div class="team-name">Team name</div>
                                <div class="team-name">Team name</div>
                            </div>
                        </div>
                        <div class="round round-2">
                            <div class="box">
                                <div class="team-name">Team name</div>
                                <div class="team-name">Team name</div>
                            </div>
                            <div class="box">
                                <div class="team-name">Team name</div>
                                <div class="team-name">Team name</div>
                            </div>
                        </div>
                        <div class="round round-3">
                            <div class="box">
                                <div class="team-name">Team name</div>
                                <div class="team-name">Team name</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
