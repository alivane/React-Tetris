import React from 'react';
import { StyledDisplay } from './styles/StyledDislay';

const Display = ({ gameOver, text}) => (
    <StyledDisplay>{text}</StyledDisplay>
)

export default Display;