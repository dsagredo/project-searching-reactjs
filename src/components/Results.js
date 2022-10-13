import React, {Fragment} from 'react'
import Imagen from './Imagen';
import Pagination from './Pagination';

const Results = ({isInfo, pagePrev, pageNext}) => {
	const showImages = () => {
		if(isInfo.length === 0) return null;

		return (
			<Fragment>
				<div className="col-12 p-5 row">
					{isInfo && isInfo.map((image) => (
						<Imagen key={image.id} image={image} />
					))}
				</div>
				<div className="justify-content-center hstack">
					<Pagination pagePrev={pagePrev} pageNext={pageNext}  />
				</div>
			</Fragment>	
		);
	}

  return (
	<Fragment>
		{showImages()}
	</Fragment>
  )
}

export default Results;
