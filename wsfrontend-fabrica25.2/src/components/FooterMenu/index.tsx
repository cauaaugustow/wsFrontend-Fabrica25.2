import '../../app/page'


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
                            <a href="#"><button><></></button></a>
                            <a href="#"><button><></></button></a>
                            <a href="#"><button><></></button></a>
                        </div>
                    </div>
                </div>
                <div className="line-footer">
                    <p><a href="#">cauaaugusto@gmail.com</a></p>
                </div>
            </footer>
    )
}