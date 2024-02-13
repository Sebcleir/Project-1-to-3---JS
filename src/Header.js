import { useNavigate } from "react-router-dom";
import "./Header.css";
import LogoHeader from "./assets/images/logo-header.svg"

function Header() {
    const navigate = useNavigate()

    return (
        <div className="header">
            <img style={{marginLeft: "10px"}} src={LogoHeader} alt="logo" />
            <div className="navigation">
                <a className="navigation-item" href="#">BACKCHANNEL</a>
                <a className="navigation-item" href="#">BUSINESS</a>
                <a className="navigation-item" href="#">CULTURE</a>
                <a className="navigation-item" href="#">GEAR</a>
                <a className="navigation-item" href="#">IDEAS</a>
                <a className="navigation-item" href="#">POLITICS</a>
                <a className="navigation-item" href="#">SCIENCE</a>
                <a className="navigation-item" href="#">SECURITY</a>
                <a className="navigation-item" href="#">MERCH</a>
            </div>
            <div className="header-right">
                <button className="subscribe" onClick={() => navigate("/create")}>Create Post</button>
                <a className="navigation-item" href="#">SIGNIN</a>
                <button className="navigation-item subscribe">SUBSCRIBE</button>
                <a href="#">Search</a>
            </div>
        </div>
    )
}

export default Header;