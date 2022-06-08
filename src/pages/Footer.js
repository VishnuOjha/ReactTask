import { NavLink } from "react-router-dom";
import "../css/footer.css";

export default function Footer() {
    return (
        <>
            <div className="footer">
                <NavLink to="/info" className="infoLink">
                    <p>Go To Page 2 &#8250;</p>
                </NavLink>
            </div>
        </>
    );
}