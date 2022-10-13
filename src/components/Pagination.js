const Pagination = ({pagePrev, pageNext}) => {
	return (
		<div className="py-3">
			<button onClick={() => pagePrev()} type="button" className="btn btn-info me-1">Anterior</button>
			<button onClick={() => pageNext()} type="button" className="btn btn-info">Siguiente</button>
		</div>
	)	
}

export default Pagination;