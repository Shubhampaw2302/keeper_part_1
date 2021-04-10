import React from "react";

function Footer() {
    var d = new Date();
    var year = d.getFullYear();

    return <p className="footer">copyright {year}</p>
}

export default Footer;