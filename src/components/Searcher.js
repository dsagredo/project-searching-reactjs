import React, { useRef } from 'react'

const Buscador = ({onSearch}) => {

	const searchRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		onSearch(searchRef.current.value);
	}

  return (
	<div className="row">
		<div className="form-group col-md-8">
			<input ref={searchRef} type="text" className="form-control form-control-lg" placeholder="Busca tu Imagen. Ejemplo: Futbol" />
		</div>
		<div className="form-group col-md-4 d-grid gap-2">
		<button type="button" className="btn btn-primary btn-lg" onClick={(e) => handleSubmit(e)}>Buscar...</button>
		</div>
	</div>
  )
}

export default Buscador