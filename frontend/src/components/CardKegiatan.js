import React from "react";

const CardKegiatan = (props) => {
    return ( 
        <div className="card mb-3">
            <img src={props.image} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
     );
}
 
export default CardKegiatan;