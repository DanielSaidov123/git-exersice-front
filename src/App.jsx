import './App.css'
import { Gridlayout } from './components/Gridlayout' 
function App() {

  return (
    <>
    <h1>find the Secret Color!</h1>
    <div className='grid'>
    {[...Array(100)].map((_,i)=>( <Gridlayout key={i}/>))} 
    </div>
    </>
  )
}

export default App
