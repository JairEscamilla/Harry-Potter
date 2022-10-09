import { useState } from 'react'
import { Button } from './components/Button/Button'
import { CharacterCard } from './components/CharacterCard/CharacterCard'
import { Modal } from './components/Modal/Modal'
import './index.sass'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="App">
      <Button onClick={() => setIsModalOpen(true)}>Abrir</Button>
      <Button onClick={() => setIsModalOpen(false)}>Cerrar</Button>
      <CharacterCard></CharacterCard>
      <Modal
        isOpen={isModalOpen}
        title="Agrega un personaje"
        setIsOpen={setIsModalOpen}
      >
        Contenido del modal
      </Modal>
    </div>
  )
}

export default App
