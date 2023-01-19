import {useSelector, useDispatch} from 'react-redux'
import {guessColor} from './colorSlice'

function App() {
  const colors = useSelector((state)=> state.color.colors)
 
  const dispatch = useDispatch()
  console.log(colors)
  

  return (
    <div className="p-10">
      <h1 className="text-5xl font-bold text-center">
        Kolla ifall du är blind
      </h1>
      <div className="flex gap-1 bg-red-500 p-1 h-96">
        {colors.map((color)=> 
            <div className="flex-1" 
            style={{background: color}} 
            onClick={()=> {dispatch(guessColor(color))
            }}>
              
            </div>)}
        
        
      </div>
    </div>
  )
}

export default App
