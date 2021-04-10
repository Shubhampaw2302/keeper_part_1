import React from "react";

function Note(props) {
    return <div className="note">
        <h3>{props.heading}</h3>
        <p>{props.description}</p>
    </div>
}

export default Note;