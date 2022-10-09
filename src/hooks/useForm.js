import { useState } from 'react'

export const useForm = () => {
  const [form, setForm] = useState({
    name: '',
    dateOfBirth: '',
    eyeColour: '',
    hairColour: '',
    gender: '',
    hogwartsStudent: false,
    hogwartsStaff: false,
    image: '',
  })

  const handleFormChange = (event) => {
    const { target } = event

    if (target.name === 'posicion') {
      setForm({
        ...form,
        hogwartsStaff: false,
        hogwartsStudent: false,
        [target.value]: true,
      })
      return
    }

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
      image: pictureUrl,
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    const response = await fetch('http://localhost:3000/characters', {
      body: JSON.stringify(form),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const parsedResponse = await response.json()
    console.log(parsedResponse)
  }

  return { form, handleFormChange, handleFileChange, handleFormSubmit }
}
