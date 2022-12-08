import React from "react"
import { Link } from 'react-router-dom';
import Button from "./Button";

const Home = () => {
    return ( 
        <section className="ui-section">
            <div>
                <h1>Online shopping simplified</h1>
                <p>Order your groceries from SuperM with our easy to use app, and get products delivered straight to your doorstep</p>
                <Link to="/products">
                    <Button 
                        text="Start shopping"
                        type="button"
                    />
                </Link> 
            </div>
            <div className="ui-image">
            </div>
        </section>
     );
}
 
export default Home;