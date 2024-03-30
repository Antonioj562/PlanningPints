
const PageCall = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage-1);
        }
    };

    const handleNextPage = () => {
        if(currentPage<totalPages){
            onPageChange(currentPage+1);
        }
    };

    return(
        <div className="pageCallContainer">
            <button onClick={handlePrevPage}>Previous Page</button>
            <span>Page: {currentPage} / {totalPages}</span>
            <button 
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                >Next Page</button>
        </div>
    )
}
export default PageCall;