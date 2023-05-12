import React from 'react';
import './clock.css';
const Clock = () => {

    setInterval(() => {
        const d = new Date();
        const hr = d.getHours();
        const min = d.getMinutes();

        const hr_rot = ((30 * hr) + (min / 2)) % 360;
        const min_rot = (6 * min) % 360;

        document.getElementsByClassName('hour-hand')[0].style.rotate = hr_rot + 'deg';
        document.getElementsByClassName('minute-hand')[0].style.rotate = min_rot + 'deg';

        document.getElementsByClassName('clock')[0].title = hr + ":" + min;
    }, 1000);

    return (
        <div className="clock">
            <div className="hand hour-hand" />
            <div className="hand minute-hand" />
            <div className="watchface-circle" />
        </div>
    );
}

export default Clock;