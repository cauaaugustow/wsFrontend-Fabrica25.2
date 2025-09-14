import '../../app/page'
import SearchIcon from '../../assets/search.svg'
import Image from 'next/image'
import './style.css'
import { useState, } from 'react'



export function SearchMenu({ onSearch }: { onSearch: (value: string) => void }) {
  const [searchInput, setSearchInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchInput.trim() !== "") {
      onSearch(searchInput.toLowerCase()) 
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text" placeholder="Ex: Pikachu" className="inputSearch" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="btnSearch" type="submit">
          <Image className="searchIcon" src={SearchIcon} alt="Buscar" />
        </button>
      </form>
      <h2 className="title">Lista de Pokémons</h2>
    </section>
  )
}
