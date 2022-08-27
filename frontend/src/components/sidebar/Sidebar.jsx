import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';
import StorageIcon from '@mui/icons-material/Storage';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">closer</span>
        </div>
        <hr></hr>
        <div className="center">
            <ul>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <li>
                    <AddIcon className="icon"/>
                    <span>Nuova offerta</span>
                </li>
                <li>
                    <StorageIcon className="icon"/>
                    <span>Ordini</span>
                </li>
                <li>
                    <PeopleIcon className="icon"/>
                    <span>Clienti</span>
                </li>
                <li>
                    <LogoutIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    
    
    
    </div>
  )
}

export default Sidebar