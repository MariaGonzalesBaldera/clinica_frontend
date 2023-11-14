import {useState, Suspense, lazy} from 'react'
import { useParams } from 'react-router-dom';
import Cargando from '../../components/Cargando'

const Description = lazy(() => import('../../components/Description'))
const Header = lazy(() => import('../../components/Header'))

export default function DescriptionDoctor(){
  let { specialty } = useParams();

  const [mensaje, setMensaje] = useState("")

  const addMensaje = (mensaje) => setMensaje(mensaje)

  return(
    <>
    <Suspense fallback={<Cargando/>}>
        <Header titulo={specialty} mensaje={mensaje} />
        <Description addMensaje={addMensaje} />
      </Suspense>
    </>
  )
}