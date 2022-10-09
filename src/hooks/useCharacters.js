import { useSelector } from 'react-redux'
import { useState } from 'react'
import charactersData from '../data/hp-characters.json'

export const useCharacters = () => {
  const favs = useSelector((state) => state.favs.value)
  const favsNames = favs.map(({ name }) => name)

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

  return {
    favsNames,
    characters,
    studentsAreActive,
    staffAreActive,
    filterStaff,
    filterStudents,
  }
}
