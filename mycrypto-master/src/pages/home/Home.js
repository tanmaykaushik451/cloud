import React from 'react'
import { useSelector } from 'react-redux'
import Table from './components/Table/Table'

const Home = () => {
    const globalState = useSelector(state => state.layout)

    return (
        <div className="Home my-3">
     
            <div className="Home__bar d-flex align-items-center">
            </div>
            <div className="mt-3">
                <Table/>
            </div>
        </div>
    )
}

export default Home
