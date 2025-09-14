import { HeaderBanner } from "@/src/components/HeaderBanner";
import React from "react";
import Image from 'next/image'
import { FooterMenu } from "@/src/components/FooterMenu";


import './style.css'


type detailsPokemon = {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
    height: number;
    weight: number;
    types: {
        type: {
            name: string;
        };
    };
    base_experience: number;
}


export async function generateMetadata({ params }:any) {
  return {
    title: `Detalhes do pokemon ${params.id}`,
  };
}


export default async function Page({params}:any) {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const data: detailsPokemon = await response.json();
    const types = Array.isArray(data.types) ? data.types as { type: { name: string; }; }[] : [];
    const getTypeColor = (type: string): string => {
  switch (type) {
    case 'normal':
      return '#A8A77A';
    case 'fire':
      return '#EE8130';
    case 'water':
      return '#6390F0';
    case 'electric':
      return '#F7D02C';
    case 'grass':
      return '#7AC74C';
    case 'ice':
      return '#96D9D6';
    case 'fighting':
      return '#C22C2C';
    case 'poison':
      return '#A33EA1';
    case 'ground':
      return '#E2BF65';
    case 'flying':
      return '#A98FF3';
    case 'psychic':
      return '#F95587';
    case 'bug':
      return '#A6B91A';
    case 'rock':
      return '#B6A136';
    case 'ghost':
      return '#735797';
    case 'dragon':
      return '#6F35FC';
    case 'steel':
      return '#B7B7CE';
    case 'dark':
      return '#705746';
    case 'fairy':
      return '#D685AD';
    default:
      return '#BCC8D1';
  }
};

    return(
        <>
                <HeaderBanner />
              <main>
                <section id='pokemonsPreview'>
                    <div className='pokemonsId'>
                        <p className="idPage">#{data.id}</p>
                        <h2 className='title'>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
                        <Image width={250} height={250} src={data.sprites.front_default}  alt={data.name} loading='lazy'/>
                        <p className="type" style={{backgroundColor: getTypeColor(types[0].type.name)}}>{types[0].type.name}</p>
                        <p className="height">Altura: {data.height} </p>
                        <p className="weight">Peso: {data.weight}</p>
                        <p className="baseExperience">Experiência base: {data.base_experience}</p>

                    </div>

                    <a href="../"><button className="btnVoltar">Voltar</button></a>
                    
 
                </section>
                <FooterMenu/>
              </main>
        </>
    )
}