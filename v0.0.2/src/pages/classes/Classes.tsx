import './classes.css';
import {Header, Blocks} from '../../components';

//const [,forceUpdate] = useReducer(x => x + 1, 0);

//const location = useLocation();
/*
useEffect(() => {
 forceUpdate()
}, [location])*/

const Classes: React.FC = () => {
    const data = [
        {
            displayName: 'INF2021G',
            id: 0
        },
        {
            displayName: 'Praxistraining',
            id: 1
        }
    ];
    return (
        <div className="classes">
            <Header />
            <Blocks data={data} />
        </div>
    )
} 

export default Classes;