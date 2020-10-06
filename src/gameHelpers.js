export const STAGE_WITH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => (
    Array.from(Array(STAGE_HEIGHT), () => (
        new Array(STAGE_WITH).fill([0, 'clear'])
    ))
)