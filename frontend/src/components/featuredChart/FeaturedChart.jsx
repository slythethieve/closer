import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"

import "./featuredChart.scss"

// One idea would be to use a dynamic progress bar to show 
// how close we are in percentage to last month's revenue. Or the revenue
// from the same month last year. 

// Following the tutorial I have a summary section below, which I'm not
// sure I'm going to use. I'll follow it anyway, maybe some ideas will
// pop into my mind. 
function FeaturedChart() {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Fatturato di questo mese</h1>
        <MoreVertIcon fontSize='small'/>
      </div>
      <div className="bottom">
        <div className='featuredChart'>
          <CircularProgressbar 
            value = {70} 
            text ={"70%"} 
            strokeWidth="2"
            styles={buildStyles({
              textColor: "black",
              pathColor: "orange",
              trailColor: "white"
            })} />
        </div>
        <p className='title'>Toale fattura di questo mese</p>
        <p className='amount'>CHF 2000</p>
        <p className='desc'>Some basic description. No idea if it's going to be needed</p>
        <div className='summary'>
          <div className='item'>
              <div className='itemTitle'>
                Target mensile
                <div className='itemResult negative'>
                  <KeyboardArrowDownIcon fontSize='small'/>
                  <div className='resultAmount'>
                  CHF. 20000
                  </div>
                </div>
              </div>
          </div>
          <div className='item'>
              <div className='itemTitle'>
                Target annuale
                <div className='itemResult positive'>
                  <KeyboardArrowUpIcon fontSize='small'/>
                  <div className='resultAmount'>
                  CHF. 20000
                  </div>
                </div>
              </div>
          </div>
          <div className='item'>
              <div className='itemTitle'>
                Target del non lo so
                <div className='itemResult positive'>
                  <KeyboardArrowUpIcon fontSize='small'/>
                  <div className='resultAmount'>
                  CHF. 20000
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedChart