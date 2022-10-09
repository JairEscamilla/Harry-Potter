import { useState } from 'react'
import { Button } from './components/Button/Button'
import { CharacterCard } from './components/CharacterCard/CharacterCard'
import { Input } from './components/Input/Input'
import { Modal } from './components/Modal/Modal'
import { RadioButton } from './components/RadioButton/RadioButton'
import './index.sass'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [form, setForm] = useState({
    nombre: '',
    cumpleanios: '',
    ojos: '',
    pelo: '',
    genero: '',
    posicion: '',
  })

  const handleFormChange = (event) => {
    const { target } = event
    setForm({
      ...form,
      [target.name]: target.value,
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(form)
  }

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
        <form className="new-character-form" onSubmit={handleFormSubmit}>
          <Input label="Nombre" name="nombre" onChange={handleFormChange} />

          <Input
            label="Cumpleaños"
            name="cumpleanios"
            onChange={handleFormChange}
          />
          <Input
            label="Color de ojos"
            name="ojos"
            onChange={handleFormChange}
          />
          <Input
            label="Color de pelo"
            name="pelo"
            onChange={handleFormChange}
          />
          <div className="radio-group">
            <p className="radio-group-title">Género</p>
            <div className="radios__container">
              <RadioButton
                name="genero"
                id="woman"
                value="Mujer"
                onChange={handleFormChange}
              />
              <RadioButton
                name="genero"
                id="man"
                value="Hombre"
                onChange={handleFormChange}
              />
            </div>
          </div>
          <div className="radio-group">
            <p className="radio-group-title">Posición</p>
            <div className="radios__container">
              <RadioButton
                name="posicion"
                id="estudiante"
                value="Estudiante"
                onChange={handleFormChange}
              />
              <RadioButton
                name="posicion"
                id="staff"
                value="Staff"
                onChange={handleFormChange}
              />
            </div>
          </div>

          <Button type="submit">Guardar</Button>
        </form>
      </Modal>
    </div>
  )
}

export default App
