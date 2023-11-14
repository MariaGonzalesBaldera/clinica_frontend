import { useState, lazy, Suspense } from "react";
import { useParams } from 'react-router-dom';
import Cargando from '../../components/Cargando'
const Header = lazy(() => import('../../components/Header'))
const SearchMap = lazy(() => import('../../components/SearchMap'))
export default function SpecialtiesSelect(){
  let { specialty } = useParams();
  const [mensaje, setMensaje] = useState("")

  const addMensaje = (mensaje) => setMensaje(mensaje + " Especialistas disponibles")
  return(
    <>
    <Suspense fallback={<Cargando />}>
        <Header titulo={specialty} mensaje={mensaje} />
        <SearchMap addMensaje={addMensaje} />
      </Suspense>
    </>
  )
}