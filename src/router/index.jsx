import {BrowserRouter, Routes, Route} from  'react-router-dom';
import { DescriptionDoctor, Home, SpecialtiesSelect } from '../pages'
 
export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/select/:specialties' element={<SpecialtiesSelect/>} />
                <Route path='/description/:id' element={<DescriptionDoctor/>} />
            </Routes>
        </BrowserRouter>
    )
}