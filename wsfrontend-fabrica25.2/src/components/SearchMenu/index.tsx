import '../../app/page'
import SearchIcon from '../../assets/search.svg'
import Image from 'next/image'


import './style.css'

export function SearchMenu(){
    return(
        <section>
            <form>
                <input type="text" placeholder="Buscar..." />
                <button type="submit">
                    <Image src={SearchIcon} alt="Buscar" />
                </button>
            </form>
        </section>
    )
}