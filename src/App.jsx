import { useState } from 'react'
import { Button } from './components/Button/Button'
import { CharacterCard } from './components/CharacterCard/CharacterCard'
import { Input } from './components/Input/Input'
import { Menu } from './components/Menu/Menu'
import { Modal } from './components/Modal/Modal'
import { RadioButton } from './components/RadioButton/RadioButton'
import harryPotterImg from './assets/harry-potter.png'
import charactersData from './data/hp-characters.json'
import './index.sass'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [characters, setCharacters] = useState(charactersData)
  const [studentsAreActive, setStudentsAreActive] = useState(false)
  const [staffAreActive, setStaffAreActive] = useState(false)

  const filterStudents = () => {
    const auxCharacters = charactersData.filter(
      ({ hogwartsStudent }) => !!hogwartsStudent,
    )
    setCharacters([...auxCharacters])
    if (studentsAreActive) {
      setStudentsAreActive(false)
      setCharacters(charactersData)
      return
    }
    setStudentsAreActive(true)
    setStaffAreActive(false)
  }

  const filterStaff = () => {
    const auxCharacters = charactersData.filter(
      ({ hogwartsStaff }) => !!hogwartsStaff,
    )
    setCharacters([...auxCharacters])
    if (staffAreActive) {
      setStaffAreActive(false)
      setCharacters(charactersData)
      return
    }
    setStudentsAreActive(false)
    setStaffAreActive(true)
  }

  const [form, setForm] = useState({
    nombre: '',
    cumpleanios: '',
    ojos: '',
    pelo: '',
    genero: '',
    posicion: '',
    fotografia: '',
  })

  const handleFormChange = (event) => {
    const { target } = event
    setForm({
      ...form,
      [target.name]: target.value,
    })
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    const pictureUrl = URL.createObjectURL(file)

    setForm({
      ...form,
      fotografia: pictureUrl,
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(form)
  }

  return (
    <div className="App">
      <img
        src={harryPotterImg}
        alt="Harry Potter logo"
        className="hp-letters"
      />
      <h4 className="filters__title">Selecciona tu filtro</h4>
      <div className="filter__container">
        <Button
          variant="outlined"
          onClick={filterStudents}
          isActive={studentsAreActive}
        >
          Estudiantes
        </Button>
        <Button
          variant="outlined"
          onClick={filterStaff}
          isActive={staffAreActive}
        >
          Staff
        </Button>
      </div>
      <div className="character-cards">
        {characters.map((character) => (
          <CharacterCard
            key={character.name}
            character={character}
          ></CharacterCard>
        ))}
      </div>
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

          <input
            type="file"
            name="picture"
            id="picture"
            onChange={handleFileChange}
            multiple={false}
            style={{ width: '100%' }}
            className="character-picture"
          />

          {form.fotografia.length > 0 ? (
            <img
              className="character-picture"
              src={form.fotografia}
              alt="Foto"
            />
          ) : null}

          <Button type="submit">Guardar</Button>
        </form>
      </Modal>
      <Menu setIsModalOpen={setIsModalOpen} />
    </div>
  )
}

export default App
