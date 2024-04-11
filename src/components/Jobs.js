import React, { useEffect, useState } from "react";  
import CareerTitle from './CareerTitle.js';  

function Jobs(){ 
	const [apiData, setApiData] = useState({ products: [] }); 
	const [originalData, setOriginalData] = useState([]); 
	const [categories, setCategories] = useState([]); 
	const [activeCategory, setActiveCategory] = useState("All");

	const categoryIcons = {
		smartphones: "fa fa-mobile",
		laptops: "fa fa-laptop",
		fragrances: "fa fa-wine-bottle",
		skincare: "fa fa-spinner",
		groceries: "fa fa-wine-bottle",
		"home-decoration": "fa fa-home",
		All: "fa fa-list"
	}

	useEffect(() => {
	  const fetchData = async () => {
		try {
		  const response = await fetch('https://dummyjson.com/products');
		  if (!response.ok) {
			throw new Error('Failed to fetch data');
		  }
		  	const data = await response.json();
		  	setApiData(data); 
		  	setOriginalData(data.products); 

		  	const uniqueCategories = Array.from(new Set(data.products.map(product => product.category)));
			setCategories(["All", ...uniqueCategories]); 
		} catch (error) {
		  console.error('Error fetching data:', error);
		}
	  }; 
	  fetchData();
	}, []);
 
	const filterItem = (category) => { 
		const lowercaseCategory = category.toLowerCase();
		if (lowercaseCategory  === "all") {
		  setApiData({ ...apiData, products: originalData });  
		} else {
		  const updatedList = originalData.filter((curElem) => curElem.category === category);
		  setApiData({ ...apiData, products: updatedList });
		}
		setActiveCategory(() => category);
	};   

	console.log(apiData);

	return(
		<>
			<CareerTitle title="Select products here"/>
			<div className="jobs">
				<div className="container">
					<div className="job">
						<div className="job_nav">  
							<ul>
								{categories.map((category, index) => (
									<li key={index} onClick={() => filterItem(category)} className={activeCategory === category ? 'active' : ''}>
										<p><i className={categoryIcons[category]}></i>&nbsp; {category.charAt(0).toUpperCase() + category.slice(1)}</p>
									</li>
								))}
							</ul>
						</div>
						<ul className="job_div">
							{apiData.products.map((curElem) => {
								return(
									<li key={curElem.id}>  
										<img src={curElem.thumbnail} />
										<h3>{curElem.title}</h3>
										<p>{curElem.description}</p>
										<p className="price">$ {curElem.price}</p> 
										<h5>Stock: {curElem.stock}</h5>
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