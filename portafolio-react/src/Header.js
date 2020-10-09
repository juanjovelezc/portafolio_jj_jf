import React from "react";
import "./Header.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  return (
    <div className="header">
      <h2>PORTAFOLIO DE LOS CHUGXZ</h2>

      <div className="header__right">
        <Button onClick={() => history.push("/")} variant="outlined">
          PRINCIPAL
        </Button>
        <Button onClick={() => history.push("/proyectos")} variant="outlined">
          NUESTROS PROYECTOS
        </Button>
        <Button onClick={() => history.push("/contacto")} variant="outlined">
          CONTACTO
        </Button>
      </div>
    </div>
  );
}

export default Header;
