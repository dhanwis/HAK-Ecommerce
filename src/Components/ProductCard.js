import React, { useEffect, useState } from "react";
import { Button, Col, Input, Modal, ModalBody, Row } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart, addToWishList, setSelectedProduct } from "../store/reducer/productReducer";
import axios from "axios";
import { BASE_URL } from "../services/baseurl";

function ProductCard({ id, imgBackSrc, imgFrontSrc, title, price, actualPrice, rating,stock,description,category ,size}) {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [token,setoken]=useState("")

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const allProducts = useSelector((state) => state.products.allProducts);
  const selectedId = useSelector((state) => state.products.selectedProduct);
  const selectedProduct = allProducts.find((product) => product.id === selectedId);
  const product = allProducts.find((product) => product.id === id);


   
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setoken(sessionStorage.getItem("token"))

    }
    else{
      setoken("")
    }


  },[])
  
 

  const handleAddToWishList = async () => {
    const userId = sessionStorage.getItem('userId');
    console.log("userid:", userId); // Assuming you've stored the user ID in session storage
  
    const data = {
      product: id,
      user: userId,
    }; 
  
    try {
      const reqheaders = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      };
  
      const response = await axios.post(`${BASE_URL}/client/wishlist/${userId}/`, data, reqheaders);
      console.log(response.data);
      // Handle success response here
    } catch (error) {
      console.error('There was an error adding the product to the cart:', error);
      // Handle error here
    }
  };
  


 

  const handleAddToCart = (product) => {
    const size = product.size[0];
    const color = product.colors[0];

    const productToAdd = {
      ...product,
      size,
      colors: color,
      quantity: 1,
    };

    dispatch(addToWishList(productToAdd));
  };
  
  const renderRating = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i key={i} className="las la-star"></i>);
    }
    return stars;
  };
  const renderSelectedRating = () => {
    const stars = [];
    for (let i = 0; i < selectedProduct.rating; i++) {
      stars.push(<i key={i} className="las la-star"></i>);
    }
    return stars;
  };
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSetlectedColor] = useState("");
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  const handleColorClick = (color) => {
    setSetlectedColor(color);
  };
  const handleSelectedAddToCart = (product) => {
    const size = selectedSize || product.size[0];
    const color = selectedColor || product.colors[0];

    const productToAdd = {
      ...product,
      size,
      colors: color,
      quantity: quantity,
    };

    dispatch(addToCart(productToAdd));
  };
  const handleSelectedAddToWishList = (product) => {
    const size = selectedSize || product.size[0];
    const color = selectedColor || product.colors[0];

    const productToAdd = {
      ...product,
      size,
      colors: color,
      quantity: quantity,
    };

    dispatch(addToWishList(productToAdd));
  };

   



// to get kurtidata
  const [KurtiData,setKurtiData]=useState([])   
  
  

  useEffect(() => {
    axios.get(`${BASE_URL}/client/product/${id}/`)
      .then(response => {
        // console.log("hii", response);
        setKurtiData(response.data);
      })
      .catch(error => {
        // console.error("Error fetching data", error);
      });
  }, []);
  
  // console.log("id",KurtiData);

//   useEffect((productidd)=>{
//     axios.get(`${BASE_URL}/client/product/${productidd}/`)
// .then(response=>{
//   console.log("hello",response);
// setViewKurtiData(response.data)
// })

//   },[pid])



  return (
    <>
      <div className="card product-card">
        <button
          className="btn-wishlist btn-sm"
          type="button"
          data-toggle="tooltip"
          data-placement="left"
          title="Add to wishlist"
          onClick={() => { handleAddToWishList(product) }}
        >
          <i className="lar la-heart"></i>
        </button>
        
          <img className="card-img-top card-img-back" src={imgBackSrc} alt="..." />
          {/* <img className="card-img-top card-img-front" src={imgFrontSrc} alt="..." /> */}
        
       
        <div className="card-info">
       
          <div className="card-body">
            <div className="product-title">
             
                {title}
            
            </div>
            <div className="mt-1">
              <span style={{color:'#f85438'}} className="product-price ">
                <del className="text-danger pr-1 ">${actualPrice}</del>
                ${price}
              </span>
              <div className="star-rating">
                {renderRating()}
              </div>
            </div>
          </div>
          
          <div className="card-footer bg-transparent border-0" style={{ border: 'none' }}>
            <div className="product-link d-flex align-items-center justify-content-center">
              <button
                className="btn btn-compare"
                data-toggle="tooltip"
                data-placement="top"
                title="WishList"
                type="button"
                onClick={() => { handleAddToWishList(product) }}
              >
                <i className="lar la-heart"></i>
              </button>
              <button
                className="btn-cart btn btn-primary btn-animated mx-3"
                type="button"
                onClick={() => {
                  handleAddToCart(product)
                }}
              >
                <i className="las la-shopping-cart mr-1"></i>
              </button>
              <button
                className="btn btn-view"
                // data-toggle="tooltip"
                data-placement="top"
                title="Quick View"
                onClick={() => {
                  dispatch(setSelectedProduct(product.id))
                  toggleModal()
                }}
              >
                <span >
                  <i className="las la-eye"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

     <Modal className="" style={{ maxWidth: '50%' }} isOpen={modalOpen} toggle={toggleModal}>

        <div>
          <Row>
            <Col xs={11} className="align-items-center">
              {" "}
              {/* <h5 className=" px-4">
        Your Wishlist ({wishListItems?.length})
      </h5> */}
            </Col>
            <Col xs={1} className="flex-end">
              {" "}

              <Button
                className="btn btn-primary btn-sm fs-1"
                onClick={toggleModal}
              >
                <i className="las la-times"></i>
              </Button>
            </Col>
          </Row>
        </div>
        <ModalBody>
       
          <Row className="align-items-center">
          <Col lg="7" className="col-12">
         
              <img className="img-fluid rounded" src={imgFrontSrc} alt="" />
            
          </Col>
          <Col lg="5" className="col-12 mt-5 mt-lg-0">
            <div className="product-details">
            <h3 className="mb-0">{title}</h3>
                <div className="star-rating mb-4">
                  {/* {renderSelectedRating()} */}
                </div>
              <span className="product-price h4">${actualPrice} <del className="h6">${price}</del></span>
              <ul className="list-unstyled my-4">
                <li className="mb-2">Availibility: <span style={{color:'black'}} > {stock}</span>
                </li>
                <li>Categories: <span >{category}</span>
                
                </li>
                <li>Size: <span >{size}</span> </li>
                {/* heyyyy */}
              </ul>
              <p className="mb-4">{description}</p>
              <div className="d-sm-flex align-items-center mb-5">
                <div className="d-sm-flex align-items-center mr-sm-4">
                  {/* <div className="d-flex align-items-center mr-sm-4">
                    <Button
                      className="btn-product btn-product-up"
                      onClick={() => {
                        if (quantity > 1) setQuantity(quantity - 1);
                      }}
                    >
                      <i className="las la-minus"></i>
                    </Button>
                    <Input
                      className="form-product"
                      type="number"
                      name="form-product"
                      value={quantity}
                      onChange={(e) => {
                        const newQuantity = parseInt(e.target.value);
                        if (
                          newQuantity >= 1 &&
                          newQuantity <= product.stock
                        ) {
                          setQuantity(newQuantity);
                        }
                      }}
                      max={product.stock}
                    />
                    <Button
                      className="btn-product btn-product-down"
                      onClick={() => {
                        if (quantity < product.stock)
                          setQuantity(quantity + 1);
                      }}
                    >
                      <i className="las la-plus"></i>
                    </Button>
                  </div> */}
                </div>
                {/* <Input
                  type="select"
                  className="custom-select mt-3 mt-sm-0"
                  name="size"
                  id="size"
                  placeholder="Size"
                  onChange={handleSizeChange}
                >
                  <option disabled selected hidden>
                    Size
                  </option>
                  {selectedProduct.size.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </Input> */}
                
              </div>
              <div className="product-link d-flex align-items-center mt-4">
                <Button
                  className="btn btn-primary btn-animated mr-sm-4 mb-3 mb-sm-0"
                  type="button"
                  onClick={() => handleSelectedAddToCart(product)}
                >
                  <i className="las la-shopping-cart mr-1"></i>Add To Cart
                </Button>
                <Button
                  className="btn btn-dark btn-animated"
                  type="button"
                  onClick={() => {
                    handleSelectedAddToWishList(product);
                  }}
                >
                  {/* heree */}
                  <i className="lar la-heart mr-1"></i>Add To Wishlist
                </Button>
              </div>
            </div>
          </Col>
        </Row>
       
        </ModalBody>
      </Modal >
      

    </>

  );
}

export default ProductCard;
