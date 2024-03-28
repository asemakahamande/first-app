import Firs from "./firs.png"; 
import Sec from "./last.png"; 
import th from "./chair.png"; 
import fof from "./last.png"; 
import pro from "./Image.png"
import Rec from "./Rectangle 25.png"
import "./Products.css"

function Products() {
    return(
        <div class="atoat">
            <h1 class="atoato">Our Products</h1>
            <div class ="jime"> 
                <img src={Firs}/>
                <img src={fof}/>
                <img src={th}/>
                <img src={fof}/>
            </div>
            <div class="nguvan">
                <div class="kand">                    
                    <h4 class="Sy">Sytherine</h4>
                    <p class="mov">stylish calo chair</p>
                    <h4 class="syth">RP 2.500.000
                        <p class="syth" id="clo">RP 2.500.000</p>
                    </h4>
                </div>
                <div class="kan">                    
                    <h4 class="S">Leviosa</h4>
                    <p class="mo">stylish calo chair</p>
                    <h4 class="syt">RP 2.500.00</h4>
                </div>
                <div class="paul">                    
                    <h4 class="chu">Lolito</h4>
                    <p class="jose">Luxury big sofa</p>
                    <h4 class="gidi">RP 2.500.000
                        <p class="gidi" id="joy">RP 2.500.000</p>
                    </h4>
                </div>

                <div class="much">                    
                    <h4 class="how">Respira </h4>
                    <p class="let">Outdoor bar table and chair</p>
                    <h4 class="py">RP 2.500.000</h4>
                </div>
                    
            </div>
            <section class ="col">
                        <section class="directio">
                            <h5>New</h5>
                            <h5 class="near" >Arrival</h5>
                            <h1 class="man">Discover Our</h1>
                            <h1>New Collection</h1>
                            <p>These collections are top notch and 
                            amazing!!!! get one for your self and you will surely come for more!!!!!.</p>

                            <button><a class="remove" href="#">Buy Now </a>
                            </button>
                            
                        </section>
                        <img class="landlady" src={pro}/>
                        <img class="land" src={Rec}/>
                    </section>
                <div class="nguvan">
                    <div class="kand">                    
                        <h4 class="Sy">Sytherine</h4>
                        <p class="mov">stylish calo chair</p>
                        <h4 class="syth">RP 2.500.000
                            <p class="syth" id="clo">RP 2.500.000</p>
                        </h4>
                    </div>
                    <div class="kan">                    
                        <h4 class="S">Leviosa</h4>
                        <p class="mo">stylish calo chair</p>
                        <h4 class="syt">RP 2.500.00</h4>
                    </div>
                    <div class="paul">                    
                        <h4 class="chu">Lolito</h4>
                        <p class="jose">Luxury big sofa</p>
                        <h4 class="gidi">RP 2.500.000
                            <p class="gidi" id="joy">RP 2.500.000</p>
                        </h4>
                    </div>

                    <div class="much">                    
                        <h4 class="how">Respira </h4>
                        <p class="let">Outdoor bar table and chair</p>
                        <h4 class="py">RP 2.500.000</h4>
                    </div>  
            </div>
        </div>

    );
}

export default Products