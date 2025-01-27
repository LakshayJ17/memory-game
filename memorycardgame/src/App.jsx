import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [highestScore, setHighestScore] = useState(0)
  const [pokemonData, setPokemonData] = useState([])

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        // Fetching data from the API
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=6')
        const pokemonList = response.data.results;

        // Fetching details for each pokemon
        const details = await Promise.all(
          pokemonList.map((pokemon) => axios.get(pokemon.url))
        );

        // Formatting the data
        const formattedData = details.map((res) => ({
          name: res.data.name,
          image: res.data.sprites.front_default,
        }));

        shuffleCards(formattedData);
      } catch (error) {
        console.log("error faced fetching pokemon" + error)
      }
    }

    fetchPokemon()
  }, [])

  const shuffleCards = (data) => {
    const shuffled = (data || pokemonData).sort(() => Math.random() - 0.5);
    setPokemonData([...shuffled]);
  };


  return (
    <>
      <Header currentScore={0} highestScore={0} />
      <div className='grid grid-cols-3 gap-4 p-10'>
        {pokemonData.map((pokemon, index) => (
          <Card 
          key={index} 
          imageSrc={pokemon.image} 
          name={pokemon.name} 
          onClick={() => shuffleCards()}
          />
        ))}
      </div>

 
    </>
  )
}

export default App
