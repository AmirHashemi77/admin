import { KeyboardArrowDown, MoreVert, KeyboardArrowUp } from '@mui/icons-material';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React from 'react';
import "./featured.scss"
const Featured = () => {
    return (
        <div className='featured'>
            <div className='top'>
                <h5 className='title'>Total Revenue</h5>
                <MoreVert className='icon'/>
            </div>

            <div className='bottom'>
                <div className='featured-chart'>
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
                </div>
                <p className='subtitle'>
                    Total sales made today
                </p>
                <h5 className='price'>$420</h5>
                <small>Previous transactions processing. Last payments may not be included.
                </small>
                <div className='summary'>
                    <div className='item'>
                        <p className="item-title">Target</p>
                        <div className='item-result negetive'>
                            <KeyboardArrowDown/>
                            <p>$12.4</p>
                        </div>
                    </div>
                    <div className='item'>
                        <p className="item-title">Last week</p>
                        <div className='item-result negetive'>
                            <KeyboardArrowDown/>
                            <p>$12.4</p>
                        </div>
                    </div>
                    <div className='item'>
                        <p className="item-title">Last Month</p>
                        <div className='item-result possetive'>
                            <KeyboardArrowUp/>
                            <p>$12.4</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;