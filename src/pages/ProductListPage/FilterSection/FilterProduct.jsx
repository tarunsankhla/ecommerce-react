import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react'
import { FilterCategoryHandler } from "../../../utils/FiilterCategory";
import { FilterFeatureHandler } from "../../../utils/FilterFeature";


const FilterProduct = ({props}) =>{
    const {ProductList,setProductList,DefaultProductList} = props;
    // console.log("filter product", ProductList,setProductList);
    // const [state,dispatch] = useReducer(FilterByInStock,{categorytype:[]})
    const [categoryType,setCategoryType] = useState([]);
    const [feature,setFeature] = useState([]);
    const [sortByPrice,setSortByType] =useState(""); // hightolow = false & lowtohigh =true
    const [rating,setRating] =useState(null);
    const [productType,setProductType] =useState(null); // shoe = true & slides =false
    const [productStockType,setProductStockType] =useState(null);  // topseller = true & newest =false
    // const [unCheck, setUnCheck] = useState("");

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
    //     if(sortByPrice !== ""){
    //        SortByPrice(sortByPrice);
    //     }
    // },[ProductList]);

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
                setProductList(
                    [...DefaultProductList.filter((item) => {
                        console.log(object.categoryType.includes(item.categoryType));
                        return (object.categoryType.includes(item.categoryType)
                            || (object.feature.includes(item.feature))
                            || (object.rating ? item.rating >= object.rating : false)
                            || (object.productType ? item.productType === object.productType : false)
                            || (object.productStockType ? item.stockType === object.productStockType : false))
            
                    })])
            }
            else {
                setProductList([...DefaultProductList]);
            }
        }) ()
        
            
    }

    function SortByPrice(orderBool){
        setProductList(
            [...ProductList.sort((a,b)=>{
                if(orderBool){
                    return a.price < b.price ? -1 : a.price > b.price ? 1 :0;
                }
                return a.price > b.price ? -1 : a.price < b.price ? 1 :0;
            })]
        )
    }

    const ClearFilterHandler = () => { 
        setProductList([...DefaultProductList]);
        // setUnCheck(false);
        
    }

    return (
        <aside className="aside">
            <div className="aside-header">
                <h3>Filters</h3>
                <button onClick={()=>ClearFilterHandler()}>Clear</button>
            </div>
            <div className='aside-body'>
                {/* <div className="price-container">
                    <h4>Price</h4>
                    <input type="range" value="50" max="100" min="0" className="price-slider"/>
                </div> */}
               
                {/* stockType : "Newest TopSeller",radio */}
                <div className="sort-by-conatianer">
                    <h4>Product Stock Type</h4>
                    <div>
                        <input type="radio" id="newest" name="stocktype" value="Newest" 
                            onClick={(e)=>setProductStockType(e.target.value)} />
                        <label htmlFor="newest">Newest</label>
                    </div>
                    
                    <div>
                        <input type="radio" id="topseller" name="stocktype" value="TopSeller" 
                        onClick={(e)=>setProductStockType(e.target.value)} />
                        <label htmlFor="topseller">TopSeller</label>
                    </div>
                </div>
                {/* productType : "slides shoes"*/}
                <div className="sort-by-conatianer">
                    <h4>Product  Type</h4>
                    <div>
                        <input type="radio" id="slides" name="producttype" value="slides"
                            onClick={(e)=>setProductType(e.target.value)} />
                        <label htmlFor="slides">Slides</label>
                    </div>
                    
                    <div>
                        <input type="radio" id="shoes" name="producttype" value="shoes"
                        onClick={(e)=>setProductType(e.target.value)} />
                        <label htmlFor="shoes">Shoes</label>
                    </div>
                </div>
                 {/*  categoryType:"Football Cricket Gym Running Regular */}
                 <div className="product-page-category">
                    <h4>Category</h4>
                    <div>
                        <input className="checkbox-sneakers" onClick={()=>{
                            setCategoryType(()=>( categoryType.includes("Football") 
                                                    ? [...categoryType.filter(item=>item !=="Football")]
                                                    : [...categoryType,"Football"])
                                                    )}} 
                        type="checkbox" name="Football" value="Football"  />
                        <label htmlFor="Football">Football</label>
                    </div>
                    <div>
                        <input className="checkbox-vans" type="checkbox" name="Cricket" value="Cricket" 
                        onClick={()=>{
                            setCategoryType(()=>FilterCategoryHandler(categoryType,"Cricket") )}} />
                        <label htmlFor="Cricket">Cricket</label>
                    </div>
                    <div>
                        <input className="checkbox-converse" type="checkbox" name="Gym" value="Gym" 
                            onClick={()=>{
                                setCategoryType(()=>FilterCategoryHandler(categoryType,"Gym") )}}/>
                        <label htmlFor="Gym">Gym</label>
                    </div>
                    <div>
                        <input className="checkbox-yezzy" type="checkbox" name="Running" value="Running" 
                            onClick={()=>{
                                setCategoryType(()=>FilterCategoryHandler( categoryType,"Running"))}}/>
                        <label htmlFor="Running">Running</label>
                    </div>
                    <div>
                        <input className="checkbox-yezzy" type="checkbox" name="Regular" value="Regular" 
                            onClick={()=>{
                                setCategoryType(()=>FilterCategoryHandler(categoryType,"Regular"))}}/>
                        <label htmlFor="Regular">Regular</label>
                    </div>
                </div>
                {/* ratin 1,2,3,4 */}
                <div className="rating-container">
                    <h4>Rating</h4>
                    <div>
                        <input type="radio" id="4stars" name="drone" value="4"
                            onClick={(e)=>setRating(e.target.value)}/>
                        <label htmlFor="4stars">4 stars and above</label>
                    </div>
                    
                    <div>
                        <input type="radio" id="3stars" name="drone" value="3"
                        onClick={(e)=>setRating(e.target.value)}/>
                        <label htmlFor="3stars">3 stars and above</label>
                    </div>
                    
                    <div>
                        <input type="radio" id="2stars" name="drone" value="2"
                        onClick={(e)=>setRating(e.target.value)}/>
                        <label htmlFor="2stars">2 stars and above</label>
                    </div>
                    <div>
                        <input type="radio" id="1stars" name="drone" value="1"
                        onClick={(e)=>setRating(e.target.value)}/>
                        <label htmlFor="1stars">1 stars and above</label>
                    </div>

                </div>
                {/*  feature : "waterResistant NoLace GhostLace Lace" */}
                <div className="product-page-category">
                    <h4>Feature </h4>
                    <div>
                        <input className="checkbox-sneakers" type="checkbox" name="waterResistant" value="waterResistant"
                        onClick={()=>{
                            setFeature(()=>( feature.includes("waterResistant") 
                                                    ? [...feature.filter(item=>item !=="waterResistant")]
                                                    : [...feature,"waterResistant"])
                                                    )}}/>
                        <label htmlFor="waterResistant">Water Resistant</label>
                    </div>
                    <div>
                        <input className="checkbox-vans" type="checkbox" name="NoLace" value="NoLace"
                        onClick={()=>{
                            setFeature(()=>FilterFeatureHandler( feature,"NoLace"))}}/>
                        <label htmlFor="NoLace">NoLace</label>
                    </div>
                    <div>
                        <input className="checkbox-converse" type="checkbox" name="GhostLace" value="GhostLace"
                        onClick={()=>{
                            setFeature(()=>FilterFeatureHandler(feature,"GhostLace") )}}/>
                        <label htmlFor="GhostLace">GhostLace</label>
                    </div>
                    <div>
                        <input className="checkbox-yezzy" type="checkbox" name="Lace" value="Lace"
                        onClick={()=>{
                            setFeature(()=>FilterFeatureHandler(feature,"Lace"))}}/>
                        <label htmlFor="Lace">Lace</label>
                    </div>
                </div>
                {/* sort by price */}
                <div className="sort-by-conatianer">
                    <h4>Sort by</h4>
                    <div>
                        <input type="radio" id="lth" name="price" value="lth"
                            onClick={() => {
                                SortByPrice(true);
                                setSortByType(true);
                            }} />
                        <label htmlFor="lth">Price - Low to High </label>
                    </div>
                    
                    <div>
                        <input type="radio" id="htl" name="price" value="htl"
                            onClick={() => {
                                SortByPrice(false);
                                setSortByType(false);
                            }} />
                        <label htmlFor="htl">Price - High to Low</label>
                    </div>
                </div>
            </div>
        </aside>
    )
    }

    export default FilterProduct