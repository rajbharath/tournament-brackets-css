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
                        <ul class="round round-1">
                            <li class="knocked-out">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="selected">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                        </ul>
                        <ul class="round round-2">
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                        </ul>
                        <ul class="round round-3">
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                        </ul>
                    </div>

                    <div id="bottom">
                        <ul class="round round-1">
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                        </ul>
                        <ul class="round round-2">
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                        </ul>
                        <ul class="round round-3">
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                        </ul>
                    </div>
                </div>
                <div id="center">
                    WINNER
                </div>
                <div id="right">
                    <div id="top">
                        <ul class="round round-3">
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                        </ul>
                        <ul class="round round-2">
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                        </ul>

                        <ul class="round round-1">
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                        </ul>
                    </div>
                    <div id="bottom">
                        <ul class="round round-3">
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                        </ul>
                        <ul class="round round-2">
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                        </ul>

                        <ul class="round round-1">
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                            <li class="after-space">&nbsp;</li>
                            <li class="">Team name</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
