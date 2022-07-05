import { getAllStarships } from "./services/sw-api";
import {useState,useEffect} from 'react'
import StarShipCard from "./components/StarShipCard";
import Header from './components/Header'



function App() {
  const [starships,setStarships] = useState([])
  const [page, setPage] = useState(1)

  const handleStarships = async () =>{
    await getAllStarships(page).then((res) => {
      setStarships(res)
    })
  }

const handleNextPage = async () => {
  await getAllStarships(page).then((res) => {
    let tempArr = []
    let newArr = res
    starships.map((ship)=>{
    tempArr.push(ship)
    })
    newArr.map((ship) =>{
      tempArr.push(ship)
    })
    setStarships(tempArr)
  })
  
}


  useEffect(() =>{
    if(page === 2){
      handleNextPage()
    }
  },[page])
 
 
  useEffect(()=>{
  handleStarships()
 },[])

  return (
    <div className = 'container'>
      <Header />
      <div className="card-list">
        
      
      {starships.map((ship, idx) =>(
        <StarShipCard ship = {ship} key ={idx}/>
      ))}
      
  </div>
  {page !== 2 &&(
  <button 
  onClick = {() =>{
        setPage(2)
  }}
  className = 'btn'>Show More</button>
  )}
    </div>
  )
}

export default App;
