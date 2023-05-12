import '@theme/shell.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Register, Student, Classes, Admin, Info, ErrorNotFound } from "@pages/.";
import { Navbar } from "@components/.";

const Shell = () => {
    return (
      <BrowserRouter>
        <div className="shell">
          <Navbar />
          <div className="shell-content">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/student" element={<Student />} />
                <Route path='/classes' element={<Classes />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/info' element={<Info />} />
                <Route path="*" element={<ErrorNotFound />} />
              </Routes>
          </div>
        </div>
      </BrowserRouter>
    )
  }
  
  export default Shell;