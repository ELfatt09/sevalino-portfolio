import Home from "./pages/Home"
import Navbar from "./partials/Navbar"


function App() {

  return (
    <div id="app" className="bg-background text-text flex flex-col space-y-30 py-2">
      <Navbar />
      <Home />
    </div>

  )
}

export default App
