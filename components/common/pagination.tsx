import Link from "next/link";

const Pagination = () => {
    return (
        <>
            <div className="row row-padding-top">
                <div className="col-12">
                    <div className="blog-pagination">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-end align-items-center custom-ul">
                                <li className="page-item">
                                    <Link className="page-link" href="/">
                                        1
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" href="/">
                                        2
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link next" href="/">
                                        Next
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pagination;
