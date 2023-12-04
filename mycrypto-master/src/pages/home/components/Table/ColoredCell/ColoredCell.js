import React from 'react'

const ColoredCell = (props) => {
    return <span className={props.value > 0 ? 'text-green bold' : 'text-red bold'}>{props.value > 0 ? <i className="fa fa-caret-up" aria-hidden="true"></i> : <i className="fa fa-caret-down" aria-hidden="true"></i>}{props.currency}{String(props.value.toFixed(2))}%</span>
}

export default ColoredCell
