import {BrowserRouter, Routes, Route,Navigate} from  'react-router-dom';
import { DescriptionDoctor, Home, SpecialtiesSelect,NotFound } from '../pages'
 
export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/select/:specialty/' element={<SpecialtiesSelect/>} />
                <Route path='/description/:id' element={<DescriptionDoctor/>} />
                <Route path='/description/:specialty/:id' element={<DescriptionDoctor/>} />
                <Route path='/not_found' element={<NotFound/>} />
                <Route path='*' element={<Navigate to='not_found' replace/>} />
            </Routes>
        </BrowserRouter>
    )
}