import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react'
import { useLocation } from 'react-router';
import IcBaselineCancel from '../../../components/UI/Icons/IcBaselineCancel';
import { FilterCategoryHandler } from "../../../utils/FiilterCategory";
import { FilterFeatureHandler } from "../../../utils/FilterFeature";


const FilterProduct = ({props}) =>{
    const {ProductList,setProductList,DefaultProductList} = props;
    const [categoryType,setCategoryType] = useState([]);
    const [feature,setFeature] = useState([]);
    const [sortByPrice,setSortByPrice] =useState(""); // hightolow = false & lowtohigh =true
    const [rating,setRating] =useState(null);
    const [productType,setProductType] =useState(null); // shoe = true & slides =false
    const [productStockType,setProductStockType] =useState(null);  // topseller = true & newest =false
    const location = useLocation();
    console.log(location);


    useEffect(()=>{
        // console.log("state useEffect",categoryType,feature,"sortByPrice",sortByPrice,"rating");
        var obj ={
            categoryType:categoryType,
            feature:feature,
            sortByPrice:sortByPrice,
            rating:rating,
            productType:productType,
            productStockType:productStockType
        }
        console.log(obj);
        Filter(obj)
        
       
    },[categoryType,feature,sortByPrice,rating,productType,productStockType])
    
    // console.log("default",DefaultProductList)
    // useEffect(()=>{
    //     if (sortByPrice !== "") {
    //         console.log("Sort by price",sortByPrice);
    //         FilterSortByPrice(sortByPrice)
    //     }
    // },[ProductList]);

    console.log(location);
    console.log(FilterCategoryHandler(categoryType, location.search.split("=")[1]));


	// function urlFilter() { 
    //     console.log(location.search.split("=")[1]);
    //     FilterCategoryHandler(categoryType, location.search.split("=")[1]);
    // }
    
    useEffect(() => { 
        if (location.search.split("=")[1]) {
            setTimeout(() => {
                setCategoryType([...categoryType, location.search.split("=")[1]]);
                CheckCategoryHandler(location.search.split("=")[1]);
            }, 2000);
        }
    },[])
	
    function Filter(object){
        (async () => {
            // var res = await axios.get("/api/products");
            // console.log(res);
            // var products=res.data.products;
            // setProductList(()=>{
            console.log(DefaultProductList.filter((item) => {
                console.log(object.categoryType.includes(item.categoryType));
                return ((object.categoryType.includes(item.categoryType))
                    || (object.feature.includes(item.feature))
                    || (object.rating ? item.rating >= object.rating : false)
                    || (object.productType ? item.productType === object.productType : false)
                    || (object.productStockType ? item.stockType === object.productStockType : false))
            }))
            // })
            if (object.categoryType.length || object.feature.length || object.rating || object.productStockType || object.productType) {
                
                    let FilteredArray = [...DefaultProductList.filter((item) => {
                        console.log(object.categoryType.includes(item.categoryType));
                        return (object.categoryType.includes(item.categoryType)
                            || (object.feature.includes(item.feature))
                            || (object.rating ? item.rating >= object.rating : false)
                            || (object.productType ? item.productType === object.productType : false)
                            || (object.productStockType ? item.stockType === object.productStockType : false))
            
                    })]
                    if (object.sortByPrice !== "") {
                        console.log("Sort by price",sortByPrice);
                        FilteredArray.sort((a, b) => { 
                            if (object.sortByPrice) { 
                                return a.price - b.price;
                            }
                            return b.price - a.price;
                        })
                    }
                    setProductList([...FilteredArray])
            }
            else {
                if (object.sortByPrice !== "") {
                    console.log("Sort by price",sortByPrice);
                    setProductList([...DefaultProductList].sort((a, b) => {
                        if (object.sortByPrice) {
                            return a.price - b.price;
                        }
                        return b.price - a.price;
                    }));
                } else {
                    setProductList([...DefaultProductList]);
                }
                
            }
           

        }) ()
        
            
    }

    // function FilterSortByPrice(orderBool){
    //     setProductList(
    //         [...[...ProductList].sort((a,b)=>{
    //             if (orderBool) {
    //                 return a.price - b.price;
    //                 // return a.price < b.price ? -1 : a.price > b.price ? 1 :0;
    //             }
    //             return b.price - a.price
    //             // return a.price > b.price ? -1 : a.price < b.price ? 1 :0;
    //         })]
    //     )
    // }

    const ClearFilterHandler = () => { 
        setProductList([...DefaultProductList]);
        setCategoryType([]);
        setFeature([]);
        setProductStockType("");
        setProductType("");
        setRating("");
    }

    /**
     * The method is just to check the existing Category filter applied
    */
    const CheckCategoryHandler = (value) => { 
    
        console.log(categoryType.includes(value), value);
        return categoryType.includes(value);
    }
    /**
         * The method is just to check the existing Feature filter applied
    */
    const CheckFeatureHandler = (value) => { 
        console.log(feature.includes(value), value);
        return feature.includes(value);
    }

    /**
    * The method is just to check the existing ProductStockType filter applied 
    */
     const CheckProductStockTypeHandler = (value) => { 
        console.log(feature === value, value);
        return productStockType === value;
    }
    
    /**
    * The method is just to check the existing Product Type filter applied 
    */
     const CheckProductTypeHandler = (value) => { 
        console.log(feature === value, value);
        return productType === value;
    }

    /**
    * The method is just to check the existing rating Type filter applied 
    */
     const CheckRatingTypeHandler = (value) => { 
        console.log(feature === value, value);
        return rating === value;
    }

    return (
        <aside className="aside">
            <div className="aside-header">
                <h3>Filters</h3>
                <button className='filter-btn-clear pointer' onClick={()=>ClearFilterHandler()}>Clear<IcBaselineCancel color="red"/></button>
            </div>
            <div className='aside-body'>
                {/* <div className="price-container">
                    <h4>Price</h4>
                    <input type="range" value="50" max="100" min="0" className="price-slider"/>
                </div> */}
               
                {/* stockType : "Newest TopSeller",radio */}
                <div className="sort-by-conatianer">
                    <h4>Product Stock Type</h4>
                    <div className='pointer' onClick={(e)=>setProductStockType(e.target.value)}>
                        <input type="radio" id="newest" name="stocktype" value="Newest" checked={CheckProductStockTypeHandler("Newest")}
                            />
                        <label htmlFor="newest">Newest</label>
                    </div>
                    
                    <div className='pointer' onClick={(e)=>setProductStockType(e.target.value)} >
                        <input type="radio" id="topseller" name="stocktype" value="TopSeller" checked={CheckProductStockTypeHandler("TopSeller")}
                      />
                        <label htmlFor="topseller">TopSeller</label>
                    </div>
                </div>
                {/* productType : "slides shoes"*/}
                <div className="sort-by-conatianer">
                    <h4>Product  Type</h4>
                    <div className='pointer' onClick={(e)=>setProductType(e.target.value)}>
                        <input type="radio" id="slides" name="producttype" value="slides"  checked={CheckProductTypeHandler("slides")}
                            />
                        <label htmlFor="slides">Slides</label>
                    </div>
                    
                    <div className='pointer'  onClick={(e)=>setProductType(e.target.value)}>
                        <input type="radio" id="shoes" name="producttype" value="shoes"  checked={CheckProductTypeHandler("shoes")}
                       />
                        <label htmlFor="shoes">Shoes</label>
                    </div>
                </div>
                 {/*  categoryType:"Football Cricket Gym Running Regular */}
                 <div className="product-page-category">
                    <h4>Category</h4>
                    <div className='pointer' onClick={()=>{
                            setCategoryType(()=>FilterCategoryHandler(categoryType,"Football") )}}>
                        <input className="checkbox-sneakers"  checked={CheckCategoryHandler("Football")}
                        type="checkbox" name="Football" value="Football" />
                        <label htmlFor="Football">Football</label>
                    </div>
                    <div className='pointer' onClick={()=>{setCategoryType(()=>FilterCategoryHandler(categoryType,"Cricket") )}}>
                        <input className="checkbox-vans" type="checkbox" name="Cricket" value="Cricket" checked={CheckCategoryHandler("Cricket")}
                         />
                        <label htmlFor="Cricket">Cricket</label>
                    </div>
                    <div className='pointer' onClick={()=>{
                                setCategoryType(()=>FilterCategoryHandler(categoryType,"Gym") )}}>
                        <input className="checkbox-converse" type="checkbox" name="Gym" value="Gym" checked={CheckCategoryHandler("Gym")}
                            />
                        <label htmlFor="Gym">Gym</label>
                    </div>
                    <div className='pointer' onClick={()=>{
                                setCategoryType(()=>FilterCategoryHandler( categoryType,"Running"))}}>
                        <input className="checkbox-yezzy" type="checkbox" name="Running" value="Running" checked={CheckCategoryHandler("Running")}
                            />
                        <label htmlFor="Running">Running</label>
                    </div>
                    <div className='pointer'  onClick={()=>{
                                setCategoryType(()=>FilterCategoryHandler(categoryType,"Regular"))}}>
                        <input className="checkbox-yezzy" type="checkbox" name="Regular" value="Regular" checked={CheckCategoryHandler("Regular")}
                          />
                        <label htmlFor="Regular">Regular</label>
                    </div>
                </div>
                {/* ratin 1,2,3,4 */}
                <div className="rating-container">
                    <h4>Rating</h4>
                    <div className='pointer'   onClick={(e)=>setRating(e.target.value)}>
                        <input type="radio" id="4stars" name="drone" value="4" checked={CheckRatingTypeHandler("4")} />
                        <label htmlFor="4stars">4 stars and above</label>
                    </div>
                    
                    <div className='pointer' onClick={(e)=>setRating(e.target.value)}>
                        <input type="radio" id="3stars" name="drone" value="3" checked={CheckRatingTypeHandler("3")}  />
                        <label htmlFor="3stars">3 stars and above</label>
                    </div>
                    
                    <div className='pointer' onClick={(e)=>setRating(e.target.value)}>
                        <input type="radio" id="2stars" name="drone" value="2" checked={CheckRatingTypeHandler("2")} />
                        <label htmlFor="2stars">2 stars and above</label>
                    </div>
                    <div className='pointer'  onClick={(e)=>setRating(e.target.value)}>
                        <input type="radio" id="1stars" name="drone" value="1" checked={CheckRatingTypeHandler("1")} />
                        <label htmlFor="1stars">1 stars and above</label>
                    </div>
                </div>
                {/*  feature : "waterResistant NoLace GhostLace Lace" */}
                <div className="product-page-category">
                    <h4>Feature </h4>
                    <div className='pointer'  onClick={() => {
                                setFeature(() => FilterFeatureHandler(feature, "waterResistant"))
                            }}>
                        <input className="checkbox-sneakers" type="checkbox" name="waterResistant" value="waterResistant"
                          checked={CheckFeatureHandler("waterResistant")}/>
                        <label htmlFor="waterResistant">Water Resistant</label>
                    </div>
                    <div className='pointer' onClick={()=>{
                            setFeature(()=>FilterFeatureHandler( feature,"NoLace"))}}>
                        <input className="checkbox-vans" type="checkbox" name="NoLace" value="NoLace"
                            checked={CheckFeatureHandler("NoLace")}/>
                        <label htmlFor="NoLace">NoLace</label>
                    </div>
                    <div className='pointer' onClick={()=>{
                            setFeature(()=>FilterFeatureHandler(feature,"GhostLace") )}}>
                        <input className="checkbox-converse" type="checkbox" name="GhostLace" value="GhostLace"
                            checked={CheckFeatureHandler("GhostLace")}/>
                        <label htmlFor="GhostLace">GhostLace</label>
                    </div>
                    <div className='pointer' onClick={()=>{
                            setFeature(()=>FilterFeatureHandler(feature,"Lace"))}}>
                        <input className="checkbox-yezzy" type="checkbox" name="Lace" value="Lace"
                            checked={CheckFeatureHandler("Lace")}/>
                        <label htmlFor="Lace">Lace</label>
                    </div>
                </div>
                {/* sort by price */}
                <div className="sort-by-conatianer">
                    <h4>Sort by</h4> 
                    <div className='pointer'  onClick={() => {
                                // FilterSortByPrice(true);
                                setSortByPrice(true);
                            }}>
                        <input type="radio" id="lth" name="price" value="lth"
                            />
                        <label htmlFor="lth">Price - Low to High </label>
                    </div>
                    
                    <div className='pointer'   onClick={() => {
                                // FilterSortByPrice(false);
                                setSortByPrice(false);
                            }}>
                        <input type="radio" id="htl" name="price" value="htl" />
                        <label htmlFor="htl">Price - High to Low</label>
                    </div>
                </div>
            </div>
        </aside>
    )
    }

    export default FilterProduct