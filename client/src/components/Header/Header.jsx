/* eslint-disable no-unused-vars */
import { useEffect , useState , useContext } from "react";
import { useNavigate } from "react-router-dom";
//react-icons used  --vvv  //
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";

const Header = () => {
const [scrolled, setScrolled] = useState(false);   
const [showCart, setShowCart] = useState(false);   
const [showSearch, setShowSearch] = useState(false);
const {cartCount} = useContext(Context);
const navigate = useNavigate()


const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 200){
        setScrolled(true);
    }else {
        setScrolled(false);
    }
}
useEffect(() => {
window.addEventListener("scroll", handleScroll);
},[])
const handleClick = () => {
    window.scrollTo({ top:600, behavior: 'smooth' });
    
}
const handleClickO = () => {
    window.scrollTo({ top:4600, behavior: 'smooth' });
}

return(
        <>
        <header className={`main-header ${scrolled ? "sticky-header": "" }`}>
            <div className="header-content">
                <ul className="Left">
                    <li onClick={() => navigate("/")}>Home</li>
                   <li onClick={handleClickO}> About </li> 
                    <li onClick={handleClick}>Categories</li>
                </ul>
                <div className="center" onClick={() => navigate("/")}>  SOUL STACK </div>
                <div className="right" >
                    <TbSearch onClick={() => setShowSearch(true)}/>
                    <AiOutlineHeart />
                    <span className="cart-icon" onClick={() => setShowCart(true)}>
                        <CgShoppingCart />
                        {!!cartCount && <span>{cartCount}</span>}
                    </span>
                </div>
            </div>
        </header>
        {showCart && <Cart setShowCart={setShowCart}/>}
        {showSearch && <Search setShowSearch ={setShowSearch} />}
        </>
        );
};

export default Header;
