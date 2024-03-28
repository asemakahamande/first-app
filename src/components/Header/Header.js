import Logo from "./Logo.png";
import One from "./one.png";
import Two from "./Two.png"; 
import Three from "./Three.png"; 
import Four from "./Four.png"; 
import Next from "./next.png"
import  './Header.css'
function Header(){
    return (
        <div>
            <div id="gri">
                <img class="ogo" src={Logo}/>
                <a class="na" href="#">Home</a>
                <a id="mid" href="#">Shop</a>
                <a id="mid" href="#">About</a>
                <a id="mid" href="#">Contact</a>
                <a href="#"><img class="las" src={One}/></a>
                <a href="#"><img id="last" src={Two}/></a>
                <a href="#"><img id="last" src={Three}/></a>
                <a href="#"><img id="last" src={Four}/></a>
            </div>
            <section class ="col">
                    <img class="fin" src={Next}/>
                    <section class="direction">
                        <h5>New</h5>
                        <h5 class="near" >Arrival</h5>
                        <h1 class="man">Discover Our</h1>
                        <h1>New Collection</h1>
                        <p>These collections are top notch and 
                        amazing!!!! get one for your self and you will surely come for more!!!!!.</p>

                        <button><a class="remove" href="#">Buy Now </a>
                        </button>

                    </section> 
            </section>
        </div>
    );

}

export default Header;