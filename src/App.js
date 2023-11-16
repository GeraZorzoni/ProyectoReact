import "./miCss.css";

import imagen0 from "./images/rey_ataulfo.png";
import imagen1 from "./images/rey_atanagildo.png";
import imagen2 from "./images/rey_ervigio.png";
import rey from "./images/rey_incognito.png";

function App() {
  const nombres = ["Ataulfo", "Atanagildo", "Erviglio"];
  const cambiarImagen = (e) => {
    if (e.target.src.includes("incognito")) {
      e.target.style.visibility = "hidden";
    } else {
      e.target.src = rey;
    }
    e.target.parentNode.style.backgroundColor = "white";
  };

  const cambiarTexto = (e) => {
    if (e.target.innerHTML === "Visto") {
      e.target.innerHTML = "";
    } else {
      e.target.innerHTML = "Visto";
    }
  };

  return (
    <div className='contenedor'>
      <div className='caja'>
        <img onClick={cambiarImagen} src={imagen0} alt='Ataulfo' />
        <div onClick={cambiarTexto} className='nombre'>
          {nombres[0]}
        </div>
      </div>

      <div className='caja'>
        <img onClick={cambiarImagen} src={imagen1} alt='Atanagildo' />
        <div onClick={cambiarTexto} className='nombre'>
          {nombres[1]}
        </div>
      </div>

      <div className='caja'>
        <img onClick={cambiarImagen} src={imagen2} alt='Erviglio' />
        <div onClick={cambiarTexto} className='nombre'>
          {nombres[2]}
        </div>
      </div>
    </div>
  );
}

export default App;
