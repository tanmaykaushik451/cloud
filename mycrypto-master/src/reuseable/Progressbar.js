import React from 'react'

const Progressbar = (props) => {

    const {height="6",progress} = props;

    return (
        <div className="progress" style={{ height: `${height}px` }}>
            <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `${progress}%`, height: `${height}px` }} aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} />
        </div>
    )
}

export default Progressbar
