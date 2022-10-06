import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
import "./featuredChart.scss"

function FeaturedChart({total}) {

  const target = 10000
  const result = Math.round(Number(total[0])/target*100)

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Target fatturato mese corrente</h1>
        <MoreVertIcon fontSize='small'/>
      </div>
      <div className="bottom">
        <div className='featuredChart'>
          <CircularProgressbar 
            value = {result} 
            text ={`${result}%`} 
            strokeWidth="2"
            styles={buildStyles({
              textColor: "black",
              pathColor: "orange",
              trailColor: "white"
            })} />
        </div>
        <p className='title'>Toale fattura di questo mese</p>
        <p className='amount'>CHF {total[0]}</p>
        <p className='desc'>Some basic description. No idea if it's going to be needed</p>
      </div>
    </div>
  )
}

export default FeaturedChart