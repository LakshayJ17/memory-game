import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [highestScore, setHighestScore] = useState(0)
  const [pokemonData, setPokemonData] = useState([])
  const [clickedCards, setClickedCards] = useState([])

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        // Fetching data from the API
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=8')
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

  const handleCardClick = (name) => {
    // Check if the card was already clicked
    if (clickedCards.includes(name)) {
      // Reset the score if same card clicked again
      setCurrentScore(0);
      setClickedCards([]); // Reset the clicked cards
    } else {
      // Add the card to the clicked cards list
      setClickedCards([...clickedCards, name]);

      // Increment the score
      setCurrentScore(currentScore + 1);

      // Update highest score if needed
      if (currentScore + 1 > highestScore) {
        setHighestScore(currentScore + 1);
      }
    }

    shuffleCards(pokemonData)
  }

  return (
    <div className='bg-gray-700'>
      <Header currentScore={currentScore} highestScore={highestScore} />
      <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 p-8'>
        {pokemonData.map((pokemon, index) => (
          <Card
            key={index}
            imageSrc={pokemon.image}
            name={pokemon.name}
            onClick={() => handleCardClick(pokemon.name)}
          />
        ))}
      </div>
    </div>
  )
}

export default App

