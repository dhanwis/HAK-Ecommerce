import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { useSelector } from "react-redux/es";
import all from '../../allproducts'
import { BASE_URL } from "../../services/baseurl";
import axios from "axios";

function ProductIndex() {
  const trendingproducts = useSelector(
    (state) => state.products.allProducts
  ).slice(0, 8);

  useEffect(()=>{console.log('1',trendingproducts);},[])




// to get trending products
const [viewTrending,setviewTrending]=useState([])

  useEffect(()=>{

    axios.get(`${BASE_URL}/client/product/trending`)
    .then(response=>{
      console.log("r",response);
      setviewTrending(response.data)
    })
    .catch(error=>{
      console.error("Error in fetching data",error);
    })
  },[])



  return (
    <>
      <section>
        <div className="container-fluid px-lg-8">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-md-10">
              <div className="mb-8">
                <h6 className="text-primary mb-1">— New Collection</h6>
                <h2 className="mb-0">Trending Products</h2>
              </div>
            </div>
          </div>
          <div className="row">

            
            {
             viewTrending && viewTrending.length>0 ? (
            viewTrending.map((product)=>(
            <div className="col-xl-3 col-lg-4 col-md-6" key={product.id}>
                <ProductCard
                  id={product.id}
                  imgBackSrc={`${BASE_URL}${product.color.image_url}`}
                  imgFrontSrc={`${BASE_URL}${product.color.image_url}`}
                  // imgFrontSrc={`assets/images/${product.pictures[1]}`}
                  title={product.product.name}
                  price={product.discount_price}
                  actualPrice={product.actual_price}
                   rating={product.rating}
                   stock={product.stock}
                   description={product.product.description}
                   category={product.category.name}
                   size={product.size.name}

                />
              </div>
              ))
            )
            :null
          }
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductIndex;
