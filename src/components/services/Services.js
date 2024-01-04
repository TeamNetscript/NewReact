function Services({ServicesDataInit}){
	return(
		<>
			<div className="techServices">
				{ServicesDataInit.map((curElem) => {
					return (
						<>
							<div className="techSinfo" key={curElem.id}>
				                <span>{curElem.icon}</span>
				                <h5>{curElem.name}</h5>
				                <p>{curElem.description}</p>
				            </div>
						</>
					)} 
				)} 
            </div>
		</>
	);
}

export default Services;