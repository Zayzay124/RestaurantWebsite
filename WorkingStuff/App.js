import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Careers from "./Careers"
import ContactUs from "./ContactUs"
import Main from "./Main"

export default function App() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element = {<Careers />} />
                    <Route path = "/Careers" element = {<Careers />} />
                    <Route path = "/ContactUs" element = {<ContactUs />} />
                    <Route path = "/Main" element = {<Main />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}