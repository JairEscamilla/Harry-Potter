import { Button } from './components/Button/Button'
import { CharacterCard } from './components/CharacterCard/CharacterCard'
import { Input } from './components/Input/Input'
import { Menu } from './components/Menu/Menu'
import { Modal } from './components/Modal/Modal'
import { useState } from 'react'

import { RadioButton } from './components/RadioButton/RadioButton'
import harryPotterImg from './assets/harry-potter.png'

import { useCharacters } from './hooks/useCharacters'
import { useForm } from './hooks/useForm'
import './index.sass'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    favsNames,
    characters,
    studentsAreActive,
    staffAreActive,
    filterStaff,
    filterStudents,
    setCharacters,
    newCharacters,
  } = useCharacters()

  const {
    form,
    handleFormChange,
    handleFileChange,
    handleFormSubmit,
    formRef,
  } = useForm(setIsModalOpen, setCharacters, characters, newCharacters)

  return (
    <div className="App">
      <img
        src={harryPotterImg}
        alt="Harry Potter logo"
        className="hp-letters"
      />
      <h4 className="filters__title">Selecciona tu filtro</h4>
      <div className="filters__container">
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
            isFav={favsNames.includes(character.name)}
          ></CharacterCard>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        title="Agrega un personaje"
        setIsOpen={setIsModalOpen}
      >
        <form
          className="new-character-form"
          onSubmit={handleFormSubmit}
          ref={formRef}
        >
          <Input label="Nombre" name="name" onChange={handleFormChange} />

          <Input
            label="Cumpleaños"
            name="dateOfBirth"
            onChange={handleFormChange}
          />
          <Input
            label="Color de ojos"
            name="eyeColour"
            onChange={handleFormChange}
          />
          <Input
            label="Color de pelo"
            name="hairColour"
            onChange={handleFormChange}
          />
          <div className="radio-group">
            <p className="radio-group-title">Género</p>
            <div className="radios__container">
              <RadioButton
                name="genero"
                id="woman"
                value="female"
                text="Mujer"
                onChange={handleFormChange}
              />
              <RadioButton
                name="genero"
                id="man"
                value="male"
                text="Hombre"
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
                value="hogwartsStudent"
                text="Estudiante"
                onChange={handleFormChange}
              />
              <RadioButton
                name="posicion"
                id="staff"
                value="hogwartsStaff"
                text="Staff"
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

          {form.image.length > 0 ? (
            <img className="character-picture" src={form.image} alt="Foto" />
          ) : null}

          <Button type="submit">Guardar</Button>
        </form>
      </Modal>

      <Menu setIsModalOpen={setIsModalOpen} />
    </div>
  )
}

export default App
