import React, { useState } from "react";
import hogs from "../porkers_data";


function Hogdisplay() {
    const [hog, setHog] = useState({})
        return (
            <>
    <div className="ui grid container" >
            <div className="row">
            {
            hogs.map((Hog, index) => (
        
            <div key={index} className="col-md-4" onClick={()=>setHog(Hog)} data-bs-toggle="modal" data-bs-target="#hogModal" style={{justifyContent:"space-around"}}>
                <div className="card" id="card" style={{textAlign:"center"}}>
                    <div id="card2">
                    <h1 style={{color:"white"}}>{Hog.name}</h1>
                    <img src={Hog.image} alt={Hog.name} style={{width:"85%", height:"70%"}}/>
                    </div>
                </div>
            </div>
            ))
            }
        </div>

     
        <div>
            <div class="modal fade" id="hogModal" tabindex="-1" aria-labelledby="hogModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="hogModalLabel">{hog.name}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img src={`${hog.image}`} alt={`${hog.name}`} style={{width:"95%"}}/>
                    <p>Highest medal achieved:{hog.highest_medal_achieved}</p>
                    {hog && hog.greased===true && <span>Greased</span>}
                    <p>Weight:{hog.weight}</p>
                  </div>
                 
                </div>
              </div>
            </div>
        </div>


    </div>
        
        </>
        )

}

export default Hogdisplay;
