import React from 'react'

const Imagen = ({image: {likes, previewURL, tags, views}}) => (
	<>
		<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
			<div className="card">
				<img src={previewURL} alt={tags} className="card-img-top img-fluid rounded float-start" />
				<div className="card-body">
					<p className="card-text">{likes} Me gusta</p>
					<p className="card-text">{views} Vistas</p>
				</div>
			</div>
		</div>
	</>
);

export default Imagen;
