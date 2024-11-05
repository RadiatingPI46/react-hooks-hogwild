import React, { useState } from "react";
import hogs from "../porkers_data";

// Function responsible for displayig tghe pig data pn porkers_data
function Hogdisplay() {
    const [hog, setHog] = useState({})
        return (
            <>
    <div className="ui grid container" >
            <div className="row">
            {
            hogs.map((Hog, index) => (
              // A map function for listing the objects in order
            <div key={index} className="col-md-4" onClick={()=>setHog(Hog)} data-bs-toggle="modal" data-bs-target="#exampleModal" style={{justifyContent:"space-around"}}>
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

     {/* A modal that displays data when a particular pig is chosen (Has an issue) */}
        <div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{hog.name}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
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
