import "./miCss.css";

import imagen0 from "./images/rey_ataulfo.png";
import imagen1 from "./images/rey_atanagildo.png";
import imagen2 from "./images/rey_ervigio.png";

function App() {
  const nombres = ["Ataulfo", "Atanagildo", "Erviglio"];

  return (
    <div className="contenedor">
      <div className="caja">
        <img src={imagen0} className="" alt="rey_ataulfo" />
        <div className="nombre">{nombres[0]}</div>
      </div>

      <div className="caja">
        <img src={imagen1} className="" alt="rey_atanagildo" />
        <div className="nombre">{nombres[1]}</div>
      </div>

      <div className="caja">
        <img src={imagen2} className="" alt="rey_ervigio" />
        <div className="nombre">{nombres[2]}</div>
      </div>
    </div>
  );
}

export default App;
