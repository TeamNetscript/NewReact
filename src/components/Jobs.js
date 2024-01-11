import JobData from "./JobData.js"
import { useState } from 'react';

function Jobs(){

	const [myjob, setJob] = useState(JobData);

	return(
		<>
			<div className="jobs">
				<div className="container">
					<div className="job">
						<div className="job_nav">
							<ul>
								<li className="active"><p><i className="fa fa-code"></i> Web Designer</p></li>
								<li><p><i className="fa fa-tv"></i> Web Developer</p></li>
								<li><p><i className="fa fa-list"></i> All Jobs</p></li>
							</ul>
						</div>
						<ul className="job_div">
							{myjob.map((curElem) => {
								return(
									<li key={curElem.id}>
										<span>{curElem.icon}</span>
										<h3>{curElem.title}</h3>
										<p>{curElem.Des}</p>
									</li>
									)
								})
							}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default Jobs;