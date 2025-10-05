import './App.css'
import NombreCurso from './components/Nombre'
import PresentacionOAV from './src_orlando_av/PresentacionOAV'
import { useState } from 'react';

function App() {
  let [X,setX] = useState<number>(0);
  let [contadorState, setContadorState] = useState<number>(0);
  function restarContador() {
    setContadorState(contadorState - 1);
  }
  return (
    <>
      <h1>
        <NombreCurso /> 
      </h1>
      
      <PresentacionOAV nombre="OrlandoAV" descripcion="Uso de Props con atributo edad no obligatorio, valor por defecto" />
      
      <div>
        <h2>Contador: {contadorState}</h2>
        <button onClick={() => {
                                setContadorState(contadorState + 1);
                                // console.log("Contador: ", contadorState + 1);
                              }}>
          Incrementar Contador usando una funcion flecha
        </button>
        <button onClick={restarContador}>
          Decrementar Contador usando una funcion normal
        </button>
      </div>
      <div>
        <h2>Valor X renderizado en tiempo real: {X}</h2>
      </div>
      <input type="Number" placeholder='Ingrese nuevo valor X' onChange={(e) => setX(Number(e.target.value))} />

    </>
  )
}

export default App
