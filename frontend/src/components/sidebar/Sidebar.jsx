import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';
import StorageIcon from '@mui/icons-material/Storage';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom"
function Sidebar() {
  return (
    <div className="sidebar">
        <div className="top">
            <Link to ="/">
                <span className="logo">closer</span>
            </Link>
        </div>
        <hr></hr>
        <div className="center">
            <ul>
                <Link to="/">
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                </Link>
                <Link to="/new">
                    <li>
                        <AddIcon className="icon"/>
                        <span>Nuova offerta</span>
                    </li>
                </Link>
                <Link to="/orders">
                <li>
                    <StorageIcon className="icon"/>
                    <span>Ordini</span>
                </li>
                </Link>

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