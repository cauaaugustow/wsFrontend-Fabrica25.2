import '../../app/page'
import Image from 'next/image'


import './style.css'

export function HeaderBanner(){
    return(
        <header>
            <nav>
                <a href="../"><h1>PokeHub</h1></a>
            </nav>
        </header>
    )
}