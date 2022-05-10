import React, {useState} from "react";


export const usePagination = (data, cnt) => {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / cnt);

    function current() {
        const start = (currentPage - 1) * cnt;
        const end = start + cnt;
        //0 4 8...
        return data.slice(start, end);
    }

    function setPagination() {
        let arr = [];
        for (let i = 0; i < maxPage; i++) {
            arr.push(
                <div 
                    className={(i + 1) === currentPage ? "active" : ""} 
                    key={ i } 
                    onClick={() => {
                        setCurrentPage(i + 1);
                    }}
                >
                    { i + 1 }
                </div>
            );
        }
        return arr;
    }

    return {currentPage, maxPage, current, setPagination};
}
