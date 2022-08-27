import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SummarizeIcon from '@mui/icons-material/Summarize';
function Widget() {
  return (
    <div className="widget">
        <div className="left">
            <span className="title"># Invoices</span>
            <span className="counter">23123</span>
            <span className="link">See all invoices</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon />
                20%
            </div>
            <SummarizeIcon className="icon" />
        </div>
    </div>
  )
}

export default Widget