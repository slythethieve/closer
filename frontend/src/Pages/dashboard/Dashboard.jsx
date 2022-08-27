import Sidebar from "../../components/navbar/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import "./dashboard.scss"


function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        home container
      </div>
    </div>
  )
}

export default Dashboard