import { useEffect, useRef } from "react"
import pokemonApi from "../hooks/pokemonApi"

const FormSearch = ({ setFormType}) => {

    const [ data, getAllTypes] = pokemonApi()
    const valueSelect = useRef()
    
    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/type'
        getAllTypes(url)
    }, [])

    const handleChange = () => {
        setFormType(valueSelect.current.value)
    }

  return (
    <select onChange={handleChange} ref={valueSelect} className="form_box">
        <option value="">All things</option>
        {data?.results?.map(names => (
            <option key={names.url} value={names.url}>{names.name}</option>
        ))}
    </select>
  )
}

export default FormSearch