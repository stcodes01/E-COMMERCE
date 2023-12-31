/* eslint-disable no-unused-vars */
import { useState,useContext } from "react";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import "./SingleProduct.scss";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import prod from "../../../src/assets/products/watch-prod-1.webp";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Context } from "../../utils/context";
const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const {id} = useParams();
    const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
const{handleAddToCart} = useContext(Context);
    const increment = () => {
        setQuantity((prevState) =>prevState + 1);
    };
    
    const decrement = () => {
        setQuantity((prevState) => {
            if(prevState === 1) return 1;
            else return (prevState - 1);
        });
    };
if(!data) return;
const product = data.data[0].attributes
    return <div className="SP-main-content">
        <div className="layout">
            <div className="SP-product-page">
                <div className="left">
<img src={process.env.REACT_APP_STRIPE_APP_DEV_URL +
product.img.data[0].attributes.url
} alt="" />
                 </div>
<div className="right">
<spa className="name">{product.title}</spa>
<spa className="price">&#8377;{product.price}</spa>
<spa className="desc">{product.desc}</spa>
<div className="cart-buttons">
    <div className="quantity-bt">
        <span onClick={decrement}>-</span>
        <span>{quantity}</span>
        <span onClick={increment}>+</span>
    </div>
    <button className="add-to-cart-button" onClick={()=>{ handleAddToCart(data.data[0],quantity);
     setQuantity(1);}}
   >
        <FaCartPlus size={20} />
        ADD TO CART
    </button>
</div>
<span className="divider" />
<div className="info-item">
    <span className="text-bold">Category:{" "}
<span>
{product.categories.data[0].attributes.title}
</span>
</span>

<span className="text-bold">
    Share:
    <span className="social-icons">
    <FaFacebook size={18}/>
    <FaTwitter size={18}/>
    <FaInstagram size={18}/>
    <FaLinkedin size={18}/>
    <FaPinterest size={18}/>
    <FaCartPlus size={18}/>
                 </span>
             </span>
         </div>
     </div>
 </div>
 <RelatedProducts
                    productId={id}
                    categoryId={product.categories.data[0].id}
                />
                </div>
            </div>;
};

export default SingleProduct;
