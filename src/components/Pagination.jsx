import React from "react";

function Pagination(props) {
  let pages = [];
  for (
    let i = 1;
    i <= Math.ceil(props.movieArray.length / props.moviesPerPage);
    i++
  ) {
    pages.push(i);
  }
  const Moviecategory = props.categoryName;
  console.log(Moviecategory);
  return (
    <div >
      {pages.map((pgno, index) => (
        <button
          key={index}
          onClick={() => {
            props.setcategories((prevCategories) => {
                return {
                    ...prevCategories,
                    [Moviecategory]: {
                      ...prevCategories[Moviecategory],
                      curPage: pgno,
                      endInd: prevCategories[Moviecategory].moviePerPage * pgno,
                      startInd:
                        prevCategories[Moviecategory].moviePerPage * pgno -
                        prevCategories[Moviecategory].moviePerPage,
                    },
            }});
          }}
        >
          {pgno}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
