import { useState } from "react";
import hogs from "../porkers_data";

function Subnav()
{
   const [filter, setFilter]=useState({})
    return(
      // The top most nav display on the website containing drop down menus (The drop downs also have an issue)
        <div style={{backgroundColor:"gray"}}>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                {/* aA drop down responsible for the filtering of data */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Filter</a>
                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item" onClick={()=>setFilter(hogs.filter((hog)=>{
                      return filter.greased ? hog.greased:true;
                      
                    }))} >Greased</button></li>
                    <li><a className="dropdown-item" href="#" >Non Greased</a></li>
                  </ul>
                </li>
                {/* A drop down responsible for the sorting of data */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Sort</a>
                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item" onClick={hogs.sort()}>Sort by Name</button></li>
                    <li><button className="dropdown-item" onClick={hogs.sort()}>Sort by Weight</button></li>
                  </ul>
                </li>
            </ul>
        </div>
    )
}
export default Subnav;