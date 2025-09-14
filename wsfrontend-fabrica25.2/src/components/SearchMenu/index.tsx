import '../../app/page'
import SearchIcon from '../../assets/search.svg'
import Image from 'next/image'
import './style.css'

interface SearchMenuProps {
  onSearch: (value: string) => void;
  searchValue: string;
}


export function SearchMenu({ onSearch, searchValue }: SearchMenuProps) {
    return(
        <>
         <section >
             <form >
                 <input type="text" placeholder="Ex : Pikachu" value={searchValue} onChange={(e) => onSearch(e.target.value)}/>
                <button className ='btnSearch' type="submit"  >
                     <Image className='searchIcon' src={SearchIcon} alt="Buscar"  />
                 </button>
             </form>
             <h2 className='title'>Lista de pokemons</h2>
         </section>
         </>
    )
}
