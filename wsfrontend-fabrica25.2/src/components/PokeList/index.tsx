import '../../app/page'
import React from 'react'


type Poke = {
    name: string,
    id: string
}

const poke: Poke[] = []

import './style.css'

export function PokeList(){
    return(
        <section id='pokelist'>
            {
                poke.map((pokemon) => {
                    return(
                        <div key={pokemon.id}>
                            <p>{pokemon.name}</p>
                        </div>
                    )
                })
            }
        </section>
    )
}