
import First from "./first.png"; 
import Second from "./second.png"; 
import Third from "./third.png"; 
import  './Sample.css'
function Sample(){
    return(
        <div>
            <h1 class="inSample">Sample of Our Collections</h1>
            <p class="inSampl"> View them to Your Delight</p>
            <div class = "combo">
                <img class="agbian" src={First}/>
                <img class="agbian" src={Second}/>
                <img class="agbian" src={Third}/>
            </div>
            <div class="teryila">
                    <h4 class="mande">Dining</h4>
                    <h4 class="mande">Living</h4>
                    <h4 class="mande">Bedroom</h4>

            </div>
        </div>
    );

} 

export default Sample;