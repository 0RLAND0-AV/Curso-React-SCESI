import './App.css'
import NombreCurso from './components/Nombre'
import PresentacionOAV from './src_orlando_av/PresentacionOAV'


function App() {
  return (
    <>
      <h1>
        <NombreCurso /> 
      </h1>
      <div>
        <PresentacionOAV nombre="OrlandoAV" descripcion="Uso de Props con valor edad no obligatorio, valor por defecto" />
      </div>
    </>
  )
}


export default App
