import { useEffect, useState } from "react"
import Loading from "./components/Loading"
import Tours from "./components/Tours"

const API = "https://course-api.com/react-tours-project"
const App = () => {
  const [loading, setLoading] = useState(false)
  const [tour, setTour] = useState([])
  //Remove the tour
  const removeTour = (id) => {
    const newTour = tour.filter((tor) => {
      return tor.id !== id
    })
    setTour(newTour)
  }
  //Fetch Data from API
  const fetchTours = async () => {
    setLoading(true)
    const response = await fetch(API)
    // console.log(response)
    const tourData = await response.json()
    if (tourData != null) {
      setTour(tourData)
      setLoading(false)
    } else {
      setLoading(false)
    }
  }
  // It should run 1 time when app is rendered
  useEffect(() => {
    fetchTours()
  }, [])
  // if api is not fetched the execute this block
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
    // otherwise execute this one
  }
  if(tour.length===0){
    return(
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button onClick={()=>fetchTours()} className="btn">
            Refresh
          </button>
        </div>
      </main>
    );
  }
    return <Tours tourData={tour} removeTour={removeTour} />

}
export default App
