import '../../app/page'
import SearchIcon from '../../assets/search.svg'
import Image from 'next/image'
import './style.css'
import JustIcon from '../../assets/justify.svg'
import bordeIcon from '../../assets/border-all.svg'
import { useState } from 'react'









export function SearchMenu(){

    return(
        <>
         <section >
             <form>
                 <input type="text" placeholder="Ex : Pikachu"  />
                <button className ='btnSearch' type="submit" >
                     <Image className='searchIcon' src={SearchIcon} alt="Buscar" />
                 </button>
             </form>
             <h2 className='title'>Lista de pokemons</h2>
         </section>
         </>
    )
}