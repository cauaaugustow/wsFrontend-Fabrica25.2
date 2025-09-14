"use client"

import { FooterMenu } from '../components/FooterMenu'
import { HeaderBanner } from '../components/HeaderBanner'
import { SearchMenu } from '../components/SearchMenu'
import { PokeList } from '../components/PokeList';
import { getPokeList } from '../services/getPokeListALL'
import { useEffect, useState, } from 'react'


interface Pokemon {
  name: string;
  id: number;
}

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

const handleSearch = (value: string) => {
  setSearchInput(value);
  if (value.trim() === "") {
    setFilteredPokemons(pokemons);
  } else {
    const filtered = pokemons.filter(p =>
      p.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPokemons(filtered);
  }
};

  


    useEffect(() => {
    getPokeList().then((data: any) => {
      setPokemons(data);

    });
  }, []);



  return (
    <>
        <HeaderBanner />
      <main>
        <SearchMenu onSearch={handleSearch} searchValue={searchInput} />
        <PokeList pokemons={pokemons} />
        <FooterMenu/>
      </main>
    </>
  );
}
