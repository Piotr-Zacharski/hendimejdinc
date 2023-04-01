import React, {useMemo} from 'react'
import {Confetti} from "react-confetti-cannon";
import {useMediaQuery} from "@mui/material";



const ConfettiCannon = () => {
    const isMobile = useMediaQuery('(max-width:960px)');
    const launchPoints = useMemo(
        () => [
            () => ({
                x: 0,
                y: window.innerHeight,
                angle: 850,
            }),
            () => ({
                x: window.innerWidth,
                y: window.innerHeight,
                angle: -850,
            }),
        ],
        [],
    );
    const launchPointsMobile = useMemo(
        () => [
            () => ({
                x: 50,
                y: window.innerHeight,
                angle: 0,
            }),
            () => ({
                x: window.innerWidth - 50,
                y: window.innerHeight,
                angle: 0,
            }),
        ],
        [],
    );

    return (
        <Confetti
            launchPoints = {isMobile ? launchPointsMobile : launchPoints}
            burstAmount ={150}
            afterBurstAmount ={50}
            delay ={0}
            palette ={['#E0BFB8', '#ffd700', '#F6CF02', '#B76E79', '#d5aab0']}
            // afterBurstAmount={100}
            // onEnd={() => {}}
            // gravity={new Vector2(0, 0.1)}
        />
    )
}
export default ConfettiCannon;
