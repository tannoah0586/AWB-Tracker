import React from 'react';

const Pagination = ({ postsPerPage, length }) => {
    const paginationNumbers = [];
    
for (let i = 1; i < Math.ceil(length / postsPerPage); i++) {
    paginationNumbers.push(i);
    
}
return (
    <div>
        {paginationNumbers.map((pageNumber)=>(
           <button 
                key={pageNumber}
            >{pageNumber}</button> 
        ))}
    </div>
);
};

export default Pagination