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
    
    const boxes = data.map(stage => (<div>{stage.name}</div>));


    return (
        <div className="App">
            <div id="main">
                <div id="left">
                    <div id="top">
                        <article id="container">

                            <section>
                                <div>Player 1</div>
                                <div>Player 2</div>
                                <div>Player 3</div>
                                <div>Player 4</div>
                                <div>Player 5</div>
                                <div>Player 6</div>
                                <div>Player 7</div>
                                <div>Player 8</div>
                            </section>

                            <div class="connecter">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                            <div class="line">
                                <div>
                                </div><div>
                                </div><div>
                                </div><div>
                                </div>
                            </div>

                            <section id="quarterFinals">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </section>

                            <div class="connecter" id="conn2">
                                <div></div>
                                <div></div>
                            </div>

                            <div class="line" id="line2">
                                <div></div>
                                <div></div>
                            </div>

                            <section id="semiFinals">
                                <div></div>
                                <div></div>
                            </section>

                            <div class="connecter" id="conn3">
                                <div></div>
                            </div>

                            <div class="line" id="line3">
                                <div></div>
                            </div>

                            <section id="final">
                                <div></div>
                            </section>

                        </article>


                    </div>

                    <div id="bottom">
                        <article id="container">

                            <section>
                                <div>Player 1</div>
                                <div>Player 2</div>
                                <div>Player 3</div>
                                <div>Player 4</div>
                                <div>Player 5</div>
                                <div>Player 6</div>
                                <div>Player 7</div>
                                <div>Player 8</div>
                            </section>

                            <div class="connecter">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                            <div class="line">
                                <div>
                                </div><div>
                                </div><div>
                                </div><div>
                                </div>
                            </div>

                            <section id="quarterFinals">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </section>

                            <div class="connecter" id="conn2">
                                <div></div>
                                <div></div>
                            </div>

                            <div class="line" id="line2">
                                <div></div>
                                <div></div>
                            </div>

                            <section id="semiFinals">
                                <div></div>
                                <div></div>
                            </section>

                            <div class="connecter" id="conn3">
                                <div></div>
                            </div>

                            <div class="line" id="line3">
                                <div></div>
                            </div>

                            <section id="final">
                                <div></div>
                            </section>

                        </article>


                    </div>
                </div>
                <div id="center">
                    WINNER
                </div>
                <div id="right">
                    <div id="top">
                        <article id="container">

                            <section>
                                <div>Player 1</div>
                                <div>Player 2</div>
                                <div>Player 3</div>
                                <div>Player 4</div>
                                <div>Player 5</div>
                                <div>Player 6</div>
                                <div>Player 7</div>
                                <div>Player 8</div>
                            </section>

                            <div class="connecter">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                            <div class="line">
                                <div>
                                </div><div>
                                </div><div>
                                </div><div>
                                </div>
                            </div>

                            <section id="quarterFinals">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </section>

                            <div class="connecter" id="conn2">
                                <div></div>
                                <div></div>
                            </div>

                            <div class="line" id="line2">
                                <div></div>
                                <div></div>
                            </div>

                            <section id="semiFinals">
                                <div></div>
                                <div></div>
                            </section>

                            <div class="connecter" id="conn3">
                                <div></div>
                            </div>

                            <div class="line" id="line3">
                                <div></div>
                            </div>

                            <section id="final">
                                <div></div>
                            </section>

                        </article>


                    </div>
                    <div id="bottom">
                        <article id="container">

                            <section>
                                <div>Player 1</div>
                                <div>Player 2</div>
                                <div>Player 3</div>
                                <div>Player 4</div>
                                <div>Player 5</div>
                                <div>Player 6</div>
                                <div>Player 7</div>
                                <div>Player 8</div>
                            </section>

                            <div class="connecter">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                            <div class="line">
                                <div>
                                </div><div>
                                </div><div>
                                </div><div>
                                </div>
                            </div>

                            <section id="quarterFinals">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </section>

                            <div class="connecter" id="conn2">
                                <div></div>
                                <div></div>
                            </div>

                            <div class="line" id="line2">
                                <div></div>
                                <div></div>
                            </div>

                            <section id="semiFinals">
                                <div></div>
                                <div></div>
                            </section>

                            <div class="connecter" id="conn3">
                                <div></div>
                            </div>

                            <div class="line" id="line3">
                                <div></div>
                            </div>

                            <section id="final">
                                <div></div>
                            </section>

                        </article>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
