import './admin.css';
import {Header, Blocks} from '../../components';
import './admin.css';

const Admin: React.FC = () => {
    const data = [
        {
            displayName: 'Oliver Schramm'
        },
        {
            displayName: 'Yilmaz Günel'
        },
        {
            displayName: 'Miriam Schluep'
        }
    ];
    return (
        <div className="admin">
            <Header />
            <Blocks data={data} />
        </div>
    )
} 

export default Admin;