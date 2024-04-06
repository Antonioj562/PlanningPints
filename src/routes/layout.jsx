import { Outlet, Link } from "react-router-dom";
import '../styles/layout.css'

const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <ul className="home-link" key="home-button">
                        <Link style={{ color : "white" }} to="/">
                            Home
                        </Link>
                    </ul>
                    <br></br>
                    <ul className="home-link" key="home-button">
                        <Link style={{ color : "white" }} to="/Error">
                            404
                        </Link>
                    </ul>
                    
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Layout;