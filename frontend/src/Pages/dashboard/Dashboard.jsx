import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import FeaturedChart from "../../components/featuredChart/FeaturedChart"
import Chart from "../../components/chart/Chart"
import "./dashboard.scss"


function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="invoices"/>
          <Widget type="contracts"/>
          <Widget type="revenue"/>
          <Widget type="clients"/>
        </div>
        <div className="charts">
          <FeaturedChart />
          <Chart />
        </div>
      </div>
    </div>
  )
}

export default Dashboard