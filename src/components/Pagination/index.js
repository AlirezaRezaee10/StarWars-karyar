import React from 'react'
import { Link } from 'react-router-dom';

export default function Pagination({ postsPerPage, totalPosts, paginate, currentPage, prevPage, nextPage, error }) {
    const pageNumbers = []
    const next = currentPage + 1;
    const prev = currentPage - 1;
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    if (error) {
        return (
            <nav className='w-100 m-3 d-flex justify-content-center'>
                <ul className="pagination w-25">
                    <li className="page-item">
                        <a href='/1' className="page-link" paginate={1}>Back to Home</a>
                    </li>
                </ul>
            </nav>
        )
    }

    return (
        <nav className='w-100 m-3 d-flex justify-content-center'>
            <ul className="pagination">
                {currentPage > 1 ?
                    <li className="page-item" onClick={() => prevPage(currentPage)}>
                        <Link to={`/${prev}`} className="page-link">{"<"}</Link>
                    </li>
                    : ""}
                {pageNumbers.map(num => (
                    <li key={num} className="page-item"><Link to={`/${num}`} className="page-link" onClick={() => paginate(num)}>{num}</Link></li>
                ))}
                {currentPage < pageNumbers[pageNumbers.length - 1] ?
                    <li className="page-item" onClick={() => nextPage(currentPage)}>
                        <Link to={`/${next}`} className="page-link">{"\uFF1E"}</Link>
                    </li>
                    : ""}
            </ul>
        </nav>
    )
}


