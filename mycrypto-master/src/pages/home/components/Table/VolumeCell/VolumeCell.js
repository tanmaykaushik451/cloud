import React from 'react'

const VolumeCell = (props) => {

    const { total_incurrency, total_insymbol, symbol } = props.value;

    return (
        <div className="d-flex flex-column bold">
            <span>{`${props.currency}${total_incurrency.toLocaleString("en-US")}`}</span>
            <div className="d-flex justify-content-start text-grey bold">
                <small>{total_insymbol.toLocaleString("en-US")}</small><small className="ps-1 text-uppercase">{symbol}</small>
            </div>
        </div>
    )
}

export default VolumeCell
