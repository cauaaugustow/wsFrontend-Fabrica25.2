"use client"

import { FooterMenu } from '../components/FooterMenu'
import { HeaderBanner } from '../components/HeaderBanner'
import { SearchMenu } from '../components/SearchMenu'
import { PokeList } from '../components/PokeList';
import { getPokeList } from '../services/getPokeListALL'
import { useEffect, useState, } from 'react'
import { on } from 'events';
import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime';



export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  


    useEffect(() => {
    getPokeList().then((data: any) => {
      setPokemons(data);

    });
  }, []);



  return (
    <>
        <HeaderBanner />
      <main>
        <SearchMenu/>
        <PokeList pokemons={pokemons} />
        <FooterMenu/>
      </main>
    </>
  );
}
