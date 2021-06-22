import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";

function App() {
  return (
      <BrowserRouter>
          <div className="w-screen flex flex-col justify-between min-h-screen bg-specialGray-200">
            <NavBar/>
            <AppRouter/>
            <div className="w-screen flex justify-center py-2 bg-specialGray-600">
                <div className="flex items-center">
                    <div className="w-20 h-20">
                        <img src="/avocado.png" alt="" className="w-full h-full object-cover"/>
                    </div>
                    <span className="font-pressStart text-4xl text-white">AVOCADO</span>
                </div>
            </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
