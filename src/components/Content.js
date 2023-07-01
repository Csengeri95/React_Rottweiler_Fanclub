import { Routes, Route, useLocation } from "react-router-dom";



export default function Content({ routes }) {
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            {routes.map((map, index) => (
                <Route key={index} path={map.path} element={map.element} />
            ))} 
        </Routes>
    )
}