import Finalone from "./finalone.png";
import Finaltwo from "./finaltwo.png";
import Finalthree from "./finalthree.png";
import Finalfour from "./finalfour.png";
import Finalfive from "./finalfive.png";
import Finalsix from "./finalsix.png";
import Finalseven from "./finalseven.png";
import Finaleight from "./finaleight.png";
import Finalnine from "./finalnine.png";
import "./Furniture.css"

function Furnitur(){
    return (
        <div>
            <div class="kan">
                <p class="kanjo">share your setup with</p>
                <div class="n">
                    <a><h1 class="naija" >#FurniroFurniture</h1></a>
                </div>
            </div>
            <div class="container">
                <img class="grid-item1" id="one" src={Finalone} />
                <img class="grid-item1" id="two"src={Finaltwo} /> 
                <img class="grid-item1" id="three" src={Finalthree} />
                <img class="grid-item1" id="four" src={Finalfour} /> 
                <img class="grid-item1" id="five" src={Finalfive} />
                <img class="grid-item1" id="six" src={Finalsix} /> 
                <img class="grid-item1" id="seven" src={Finalseven} />
                <img class="grid-item1" id="eight" src={Finaleight} />
                <img class="grid-item1" id="nine" src={Finalnine} /> 
            </div>
        </div>

    );

}

export default Furnitur; 