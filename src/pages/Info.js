import { useNavigate } from "react-router-dom";
import "../css/info.css";

export default function Info() {
    const navigate = useNavigate();

    const pushHandler = () => {
        navigate("/");
        localStorage.setItem("back", JSON.stringify("center"));
    };
    return (
        <>
            <div className="root">
                <nav className="header">
                    <span className="basictxt"> Page 2 </span>
                </nav>
                <section className="infoBody">
                        <h2>My Introduction </h2><br/>
                        <p>
                            My self Vishnu Ojha, I have completed my Bachelor's degree in Computer Engineering,
                            From Apollo Institute of Engineering and Technology, Ahmedabad, Gujarat.        <br/>
                            Currently I'm working as React Developer in Sketchish Designer LLP, 
                            Which is Product Based company and Start up. Here in the sketchish i have learned so many,
                            thing about react and java script, I have gained lot of practicle and Real time project knowledge.
                            I have a knowledge of Html, Css, Java script and React js,Redux,materialui,swr,axios and other libraries as well . <br/>  
                            I want to learn and expolore more technology, so i can gain more knowledge and utilize it to build more efficenct and well structured products  <br/>
                            My hobbies are traveling, reading and explore more technology or programming language so i can keep my self up to date with current technology trends.
                            
                        </p>
                            <br/>
                        <h2>
                            Project's
                        </h2> <br/>
                        <div>
                        <strong>
                            Arrow Web
                        </strong>
                        <p>
                        Designing and integrating new features for the Arrow web, <br/>Which is CRM based Product built on React js , Material UI & Node js. <br/> Arrow web is a platform where you can have your  sales related data and your company's products and customer's details.<br/> It is mainly focused on Sale Department of Company. <br/> It can reduces much operations of sales department.
                        </p>
                        </div><br/>
                        <div>
                        <strong>
                        Arrow Marketplace 
                        </strong>
                        <p>
                        
Designing and integrating new features for the Arrow Marketplace , <br/> Which is E-Commerce platform, built on
React js with Type Script, Material Ui, Axios and SWR.<br/>
It is a platform where you can buy varieties of Products from different dealers 
                        </p>
                        </div>
                        
                </section>
                <footer>
                    <button onClick={pushHandler} className="eventButton">
                        &#8249; Back
                    </button>
                </footer>
            </div>
        </>
    );
}