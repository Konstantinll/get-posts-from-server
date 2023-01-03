import React from "react";
import { getPagesArray } from "../../../utils/page";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArry = getPagesArray(totalPages);
    return (
        <div className="page__wrapper">
            {pagesArry.map(p =>
            <span onClick={() => changePage(p)} key={p} className={page === p ? 'page page_current' : 'page'}>
                {p}
            </span>
            )}  
        </div>
    );
};

export default Pagination;