import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import pokemonApi from "../hooks/pokemonApi";

const PokemonName = () => {
  const { name } = useParams();
  const [data, getAllPokemons] = pokemonApi();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    if (name) {
      getAllPokemons(url);
    }
  }, []);

  const percent = (value) => (value * 100) / 200;

  const relevantStats = ["hp", "attack", "defense", "speed"];
  const filteredStats = data?.stats?.filter((stat) =>
    relevantStats.includes(stat.stat.name)
  );

  return (
    <>
      <article className="pokemon_box">
        <header
          className={`pokemon_detail_header bg-${data.types?.[0]?.type.name}`}
        >
          <img
            src={data.sprites?.other?.["official-artwork"]?.front_default}
            alt=""
          />
        </header>

        <section className="pokemon_id">
          <h2 className={`color-${data.types?.[0]?.type.name}`}>#{data.id}</h2>
          <div className="pokemon_box_name">
            <div className="line"></div>
            <h1 className={`color-${data.types?.[0]?.type.name}`}>
              {data.name}
            </h1>
            <div className="line"></div>
          </div>

          <div className="pokemon_w_h">
            <div className="pokemon_box_w_h">
              <p>weight</p>
              <span>{data.weight}</span>
            </div>
            <div className="pokemon_box_w_h">
              <p>height</p>
              <span>{data.height}</span>
            </div>
          </div>

          <div className="pokemon_box_type">
            <div className="pokemon_box_abilities">
              <p>Type</p>

              <ul className="pokemon_list_type">
                {data.types?.map((type, index) => (
                  <li
                    key={index}
                    className={`bg-solid-${data?.types[index].type.name}`}
                  >
                    {type.type.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pokemon_box_abilities">
              <p>Abilities</p>
              <ul className="pokemon_list_abilities">
                {data.abilities?.map((ability, index) => (
                  <li key={index}>{ability.ability.name}</li>
                ))}
              </ul>
            </div>
          </div>

          <section className="pokemon_stats">
            <div className="pokemon_box_stats_title">
              <h2>Stats</h2>
              <div className="line"></div>
            </div>
            <ul className="pokemon_stats_list">
              {filteredStats?.map((objStat, index) => (
                <div key={index}>
                  <div className="pokemon_stats_names">
                    <span>{objStat.stat.name}:</span>
                    <span>{objStat.base_stat} / 150</span>
                  </div>

                  <li
                    className={`pokemon_bar`}
                    key={objStat.stat.url}
                    style={{
                      background: `linear-gradient(
                            90deg, rgba(252,214,118,1) 0%, 
                            rgba(230,144,30,1) ${percent(objStat.base_stat)}%, 
                            rgb(231, 231, 231) ${percent(objStat.base_stat)}%, 
                            rgb(231, 231, 231) 100%)`,
                    }}
                  ></li>
                </div>
              ))}
            </ul>
          </section>
        </section>
      </article>

      <section className="pokemon_box">
        <div className="pokemon_box_movements pokemon_id">
            <div className="pokemon_box_movements_title">
                <h2>Movements</h2>
                <div className="line"></div>
            </div>
            <ul className="pokemon_box_movementes_list">
                {data.moves?.map((movements, index) => (
                <li key={index}>
                   {movements.move.name}
                </li>
                ))}
            </ul>
        </div>
      </section>
    </>
  );
};

export default PokemonName;
