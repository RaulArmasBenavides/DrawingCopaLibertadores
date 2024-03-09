import { Navigate, Route, Routes } from "react-router-dom"
import {  DrawingPage} from "../pages/DrawingPage"


export const DrawingRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <DrawingPage /> } />

        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
