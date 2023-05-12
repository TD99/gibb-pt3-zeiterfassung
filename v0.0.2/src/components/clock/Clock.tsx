import './clock.css';
import $ from 'jquery';

const Clock: React.FC = () => {  
    setInterval(() => {
        const d = new Date();
        const hr = d.getHours();
        const min = d.getMinutes();

        const hr_rot = ((30 * hr) + (min / 2)) % 360;
        const min_rot = (6 * min) % 360;

        $(".minute-hand").css('rotate', min_rot + 'deg');
        $(".hour-hand").css('rotate', hr_rot + 'deg');
        $(".clock").attr('title', hr + ":" + min);
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