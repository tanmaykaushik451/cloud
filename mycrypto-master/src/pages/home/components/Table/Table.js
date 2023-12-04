import React, { useMemo } from 'react'
import { useTable, useSortBy, usePagination, useRowSelect } from "react-table"
import { COLUMNS } from "./columns"
// import MOCK_DATA from "../../../../MOCK_DATA.json"
import { Checkbox } from './Checkbox'
import { useEffect } from 'react'
import { getTableData } from "../../api"
import { useState } from 'react'
import ReactPaginate from 'react-paginate';
import Loader from "../../../../reuseable/Loader/Loader"



const Table = () => {

    const [data, setTableData] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getTableData().then((res) => {
            setTableData(res.data)
            setLoading(false)
        }).catch((e) => {
            console.log(e)
        })
    }, [])

    const handlePageClick = ({ selected: selectedPage }) => {
        gotoPage(selectedPage);
    }

    const columns = useMemo(() => COLUMNS, [])
    // const data = useMemo(() => tableData, [])

    const tableInstance = useTable({
        columns,
        data,
        initialState: {
            pageIndex: 0,
            pageSize: 25
        }
    }, useSortBy, usePagination, useRowSelect)

    const { getTableProps, getTableBodyProps, headerGroups, rows, page, nextPage, previousPage, pageOptions, state, canNextPage, canPreviousPage, prepareRow, gotoPage, pageCount, setPageSize, selectedFlatRows } = tableInstance

    // const firstPageRows = page.slice(0,10)

    const { pageIndex, pageSize } = state
    return (
        <>
        {!loading ? <div className="Table">
            <div className="Table__table">
                <table {...getTableProps()} style={{ width: "100%" }}>
                    <thead>
                        {
                            headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th className="small bold" {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render('Header')}
                                            <span>
                                                {column.isSorted ? (column.isSortedDesc ? <i className="fa fa-caret-down" aria-hidden="true"></i>
                                                    : <i className="fa fa-caret-up" aria-hidden="true"></i>) : ''}
                                            </span>
                                        </th>
                                    ))}
                                </tr>
                            ))
                        }
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    })}
                                </tr>
                            )
                        })}
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="Table__footerbar">
                <div className="Table__footerbar__pageno">
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </span>
                </div>
                <div>
                    <ReactPaginate
                        previousLabel={'prev'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={pageOptions.length}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        previousLinkClassName={"pagination__link"}
                        nextLinkClassName={"pagination__link"}
                        disabledClassName={"pagination__link--disabled"}
                        activeClassName={"pagination__link--active"}
                    />

                </div>
                <div>
                <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
                    {[10, 25, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            {pageSize}
                        </option>
                    ))}
                </select>
                </div>
            </div>
        </div>
        :
        <Loader/>}
        </>
    )
}

export default Table
