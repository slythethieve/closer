import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
function Navbar() {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder="Search..." />
                <SearchIcon className="icon"/>
            </div>
            <div className="items">
                <div className="item">
                    <PersonIcon className="icon"/>
                    User
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar