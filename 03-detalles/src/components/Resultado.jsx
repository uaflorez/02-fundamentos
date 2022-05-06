import React from "react";
import PropTypes from "prop-types";

//lo que va dentro de los parentesis y las llaves es una destructuracion
const Resultado = ({ operacion, calculo }) => {
  return (
    <div>
      <br />
      <span>
        {operacion}: {calculo}
      </span>
    </div>
  );
};

Resultado.propTypes = {
  operacion: PropTypes.string,
  calculo: PropTypes.number,
};

export default Resultado;
