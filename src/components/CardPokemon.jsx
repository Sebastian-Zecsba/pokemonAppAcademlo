import { useEffect } from "react"
import pokemonApi from "../hooks/pokemonApi"
import { useNavigate } from "react-router-dom"

const CardPokemon = ({pokemon}) => {

    const [ data, getAllPokemons ] = pokemonApi()

    const navigate = useNavigate()
    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        getAllPokemons(url)
    }, [pokemon])
    
    const handleClick = () => {
        navigate(`${pokemon.name}`)
    }

    return (
        <article 
            onClick={handleClick}
            className={`pokemon border-${data?.types?.[0]?.type.name}`}
        >
            {data && (
                <>
                    <header className={`pokemon__header bg-${data.types?.[0]?.type.name}`}>
                        <img 
                            className="pokemon__sprite"
                            src={data.sprites?.other?.['official-artwork']?.front_default} 
                            alt={`Image ${data.name}`} 
                        />
                    </header>
                    <section className="pokemon__body">
                        <h2 className={`pokemon__name color-${data.types?.[0]?.type.name}`}>
                            {data.name}
                        </h2>
                        <ul className="pokemon__types">
                            {data.types?.map((objType) => (
                                <li className="pokemon__type-specific" key={objType.type.url}>
                                    {objType.type.name}
                                </li>
                            ))}
                        </ul>
                        <ul className="pokemon__stats">
                            {data.stats?.map((objStat) => (
                                <li className="pokemon__stats-specific" key={objStat.stat.url}>
                                    <span className="pokemon__stats-label">{objStat.stat.name}</span>
                                    <span 
                                        className={`pokemon__stats-value color-${data.types?.[0]?.type.name}`}
                                    >
                                        {objStat.base_stat}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </>
            )}
        </article>
    )
}

export default CardPokemon