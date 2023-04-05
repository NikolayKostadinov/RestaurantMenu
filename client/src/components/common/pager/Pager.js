const Pager = ({pagerContext}) => {
    if (pagerContext.pages > 1) {
        return (
            <ul className="pagination pagination-lg mb-4 justify-content-center">
                <li className={`page-item ${pagerContext.prevEnabled ? 'active' : 'disabled'} `}>
                    <button type="button" className="page-link page-link-borderless" disabled={!pagerContext.prevEnabled}
                            onClick={pagerContext.prevClickHandler}>
                        <i className="ti-angle-double-left"></i>
                    </button>
                </li>
                <li className="page-item d-flex">
                    <h6 className="section-subtitle text-center align-self-center">Страница {pagerContext.page + 1} от {pagerContext.pages}</h6>
                </li>
                <li className={`page-item ${pagerContext.nextEnabled ? 'active' : 'disabled'} `}>
                    <button type="button" className="page-link page-link-borderless"
                            onClick={pagerContext.nextClickHandler} disabled={!pagerContext.nextEnabled}>
                        <i className="ti-angle-double-right"></i>
                    </button>
                </li>
            </ul>
        )
    }
    return null;
}

export default Pager;
