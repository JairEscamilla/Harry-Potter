import { useSelector } from 'react-redux'
import { useState, useRef, useEffect } from 'react'

import charactersData from '../data/hp-characters.json'
import { apiUrl } from '../utils/apiUrl'

export const useCharacters = () => {
  const newCharacters = useRef()
  const favs = useSelector((state) => state.favs.value)
  const favsNames = favs.map(({ name }) => name)

  const [characters, setCharacters] = useState(charactersData)
  const [studentsAreActive, setStudentsAreActive] = useState(false)
  const [staffAreActive, setStaffAreActive] = useState(false)

  const filterStudents = () => {
    const allCharacters = [...charactersData, ...newCharacters.current]
    const auxCharacters = allCharacters.filter(
      ({ hogwartsStudent }) => !!hogwartsStudent,
    )
    setCharacters([...auxCharacters])
    if (studentsAreActive) {
      setStudentsAreActive(false)
      setCharacters(allCharacters)
      return
    }
    setStudentsAreActive(true)
    setStaffAreActive(false)
  }

  const filterStaff = () => {
    const allCharacters = [...charactersData, ...newCharacters.current]
    const auxCharacters = allCharacters.filter(
      ({ hogwartsStaff }) => !!hogwartsStaff,
    )
    setCharacters([...auxCharacters])
    if (staffAreActive) {
      setStaffAreActive(false)
      setCharacters(allCharacters)
      return
    }
    setStudentsAreActive(false)
    setStaffAreActive(true)
  }

  useEffect(() => {
    const fetchNewCharacters = async () => {
      const response = await fetch(`${apiUrl}/characters`)
      newCharacters.current = await response.json()

      setCharacters([...characters, ...newCharacters.current])
      if (studentsAreActive) {
        filterStudents()
      }

      if (staffAreActive) {
        filterStaff()
      }
    }

    fetchNewCharacters()
  }, [])

  return {
    favsNames,
    characters,
    studentsAreActive,
    staffAreActive,
    newCharacters,
    setCharacters,
    filterStaff,
    filterStudents,
  }
}
