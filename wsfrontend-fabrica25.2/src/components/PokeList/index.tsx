"use client"
import '../../app/page'
import React from 'react'
import Image from 'next/image'
import './style.css'
import { useState } from 'react'
import HorizonIcon from '../../assets/distribute-horizontal.svg'
import VerticalIcon from '../../assets/distribute-vertical.svg'

type Pokemon = {
    name: string,
    id: number,
}

type PokeListProps = {
    pokemons: Pokemon[]
}

export function PokeList({pokemons}:PokeListProps){
        const [visibility, setVisibility] = useState(true)
    
    function toggleToGrid(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault()
        setVisibility(false)
      }
    
      function toggleToList(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault()
        setVisibility(true)
      }
    
     return(
        <>
            <div className='visualizacao'>
                <a className='visualizacaoBtn' onClick={toggleToGrid}><Image src={VerticalIcon} alt="Visão em grade" width={22} height={22}/></a>
                <a className='visualizacaoBtn' onClick={toggleToList}><Image src={HorizonIcon} alt="Visão em lista" width={24} height={24}/></a>
            </div>
  
         <section id= {visibility ? 'pokemonsList' : 'pokemonsGrid'}>
            {pokemons.map((pokemon) => (
            <div key={pokemon.id} className='pokemonsId'>
            <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <p className='pokemonId'> #{pokemon.id}</p>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} className="pokemonImage" alt={pokemon.name} loading='lazy'/>
            <a href={`/details/${pokemon.id}`} className='pokedetails'>
            <button className='btn'>Detalhes</button>
            </a>
            </div>
      ))}
            </section>
        </>
    )
    }


export default PokeList