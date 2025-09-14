import '../../app/page'
import Image from 'next/image'
import GitIcon from '../../assets/github.svg'

import './style.css'

export function FooterMenu(){
    return(
           <footer>
                <div className="line-foteer">
                    <div className="flex">
                        <div className="logo-footer">
                            <h2>PokeHub</h2>
                        </div>
                        <div className="cont-footer">
                            <a href="https://github.com/cauaaugustow"><button><>
                                <Image src={GitIcon} alt="GitHub" width={40} height={40}/></></button></a>
                        </div>
                    </div>
                </div>
                <div className="line-footer">
                    <p>Desenvolvido por Cauã Augusto</p>
                </div>
            </footer>
    )
}