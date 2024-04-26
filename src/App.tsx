import { useState } from 'react'
import './App.css'
import { Card } from './components/card'
import { useFoodData } from './hooks/useFoodData'
import CreateModal from './components/create-modal/create-modal'

// Defina o tipo para o objeto foodData
interface FoodData {
  price: number;
  title: string;
  image: string;
}

function App() {
  const { data } = useFoodData(); 
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleOpenModal = () =>{
    setIsModalOpen(prev => !prev)
  }
  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {/* Use o tipo FoodData para o parâmetro foodData */}
        {data?.map((foodData: FoodData) => (
          <Card price={foodData.price} title={foodData.title} image={foodData.image} />
        ))}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>novo</button>
    </div>
  )
}


export default App
