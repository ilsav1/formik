// Core
import React, { Component } from 'react';

// Components
import { Tracker } from './Tracker';
import {Cat} from "./Cat";
import {Mouse} from "./Mouse";
import {Scoreboard} from "./Scoreboard";

export class Room extends Component {
    render() {
        return (
            <div className = 'room'>
                <h1>Поиграем в кошки-мышки!</h1>
                <Tracker
                  render = { (data) => {
                    return (
                      <>
                        <Cat {...data} />
                        <Mouse {...data} />
                        <Scoreboard {...data} />
                      </>
                    )
                  }
                  }
                />

            </div>
        );
    }
}
