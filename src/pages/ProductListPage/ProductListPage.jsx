import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCards from "../../components/UI/Card/ProductCards/ProductCards";

import FilterProduct from "./FilterSection/FilterProduct";
import {
	// product1,
	product2,
	// product3,product4,
	// product5,product6,
	// product8,product7,
	// product9,product12,
	//  product10,product13,
	//   product11,product14,product15
} from "./../../../src/assets/images/Products/Products";
import "./ProductListPage.css";
import { useLocation } from "react-router";
import { Alert } from "../../components/UI/Alert/Alert";
import { useProduct } from "../../context/ProductContext";



export default function ProductListPage(){
	const [ProductList, setProductList] = useState([]);
	const {ProductState : DefaultProductList,setProductState : setDefaultProductList} =useProduct();
	const [filterWidth, setFilteWidth] = useState(window.innerWidth <= 800); 
	const [filterAside, setFilterAside] = useState(!(window.innerWidth <= 800));
	const location = useLocation();
    console.log(location);

	/**
	 * this is for only CSS and for adjusting products list with filter section on resizing
	 */
	window.addEventListener("resize",()=>{
		console.log(window.innerWidth);
		setFilteWidth(window.innerWidth <= 800)
		setFilterAside(!(window.innerWidth <= 800))
	})

	useEffect(() => {
		try {
			(async () => {
				var res = await axios.get("/api/products");
				console.log(res);
				setProductList(res.data.products);
				setDefaultProductList(res.data.products);
			})();;
		} catch (error) {
			console.log("Product list page error", error);
			Alert("error", "Some error occured!! refresh page and try again");
		}
	}, []);
	// useEffect(() => { 
	// 	if (location.pathname.includes("search")) {
    //         console.log("found  search");
    //         if (location.search.split("=")[1])
    //         {
    //             let searchedItem = location.search.split("=")[1].toLowerCase();
    //             console.log("found  search", searchedItem, DefaultProductList);
                
	// 			setTimeout(() => {
	// 				(async () => {
	// 					var res = await axios.get("/api/products");
	// 					console.log(res);
	// 					var ProductData = res.data.products;
					
    //                     let FilteredArray = [...ProductData.filter((item) => {
    //                         return ((item.title.toLowerCase().includes(searchedItem))
    //                             || (item.description.toLowerCase().includes(searchedItem))
    //                             || (item.categoryName.toLowerCase().includes(searchedItem))
    //                             || (item.feature.toLowerCase().includes(searchedItem))
    //                             || (item.productType.toLowerCase().includes(searchedItem))
    //                             || (item.stockType.toLowerCase().includes(searchedItem))
    //                         )
	// 					})]
					
	// 					console.log(FilteredArray);
	// 					// item.categoryType.toLowerCase().includes(searchedItem))
	// 					// || (item.feature.toLowerCase().includes(searchedItem))
	// 					// || (item.categoryName.toLowerCase().includes(searchedItem))
	// 					// || (item.description.toLowerCase().includes(searchedItem))
	// 					// || (item.productType.toLowerCase().includes(searchedItem))
	// 					// || (item.stockType.toLowerCase().includes(searchedItem))
	// 					// || (item.author.toLowerCase().includes(searchedItem))
	// 					// || (item.title.toLowerCase().includes(searchedItem))
	// 					setDefaultProductList([...FilteredArray])
	// 					setProductList([...FilteredArray]);
	// 				})();
    //             }, 2000);
    //         }
            
    //     }
	// },[])
	
	return (
		<div >
		
			<div className="product-page-header">
				{filterWidth && <button className="filter-btn-cl" onClick={()=>setFilterAside((prev)=>!prev)}>Filter <span className="material-icons-round">
					filter_alt
				</span></button>}
			</div>
			<div className="product-page-container">
				{filterAside && <FilterProduct
					props={{ ProductList, setProductList, DefaultProductList, setDefaultProductList }}
					/>}
				
				<main className="main">
					<div className="product-page-header">
						<h4> ( Current Filtered Items : {ProductList?.length} )</h4>
					</div>	
					<div className="product-main-list">
						
						{ProductList?.map((item) => (
							<ProductCards
								key={item._id}
								_id={item._id}
								title={item.title}
								url={item.url}
								author={item.author}
								price={item.price}
								discount={item.discount}
								discountedPrice={item.discountedPrice}
								rating={item.rating}
								productType={item.productType}
								feature={item.feature}
								stockType={item.stockType}
								stock={item.stock}
								categoryType={item.categoryType}
							/>
						))}
					</div>
					</main>
			</div>
		</div>
	);
};
