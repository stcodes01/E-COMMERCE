import "./Banner.scss";
// eslint-disable-next-line no-unused-vars
import BannerImg from "../../../assets/banner-img.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
const navigate = useNavigate();
  return (
    <div className="Hero-banner">
  <div className="content">
    <div className="text-content">
<h1>नमस्ते</h1>
<p>
Welcome! Browse your favourite products at discounted price now. Free home delivery. 
</p>
<div className="ctas">
    <div className="banner-cta">Read More</div>
    <div className="banner-ctav2" onClick={() => navigate("/product/1")}>Shop Now</div>
</div>
    </div>
    <img className="banner-image" src={BannerImg} alt="Home" /> 
  </div>
    </div>
    );
};

export default Banner;
