import React from 'react'
import { useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import { getHeaderDataAction } from "../layout/actions"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Layout = (props) => {

    const dispatch = useDispatch()
    const globalState = useSelector(state => state.layout)

    useEffect(() => {
        dispatch(getHeaderDataAction())
    }, [])


    return (
        <>
            <div className="d-flex flex-column">
                <Navbar />
            </div>
            <div className="Layout">
                <main>
                    {props.children}
                </main>
            </div>
        </>
    )
}

export default Layout
