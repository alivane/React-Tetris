import React from 'react';

import { createStage } from '../gameHelpers';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';


const Tetris = () => {
    console.log(createStage())
    return (
        <div>
            <Stage stage={createStage()}/>
            <aside>
                <div>
                    <Display text="Score"></Display>
                    <Display text="Rows"></Display>
                    <Display text="Level"></Display>
                </div>
                <StartButton></StartButton>
            </aside>
        </div>
    )
}

export default Tetris;
