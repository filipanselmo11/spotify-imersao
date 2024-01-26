import './index.css';
import smallRight from '../../assets/icones/small-right.png';
import smallLeft from '../../assets/icones/small-left.png';
import search from '../../assets/icones/search.png';

const Header = () => {
    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="Seta Esquerda" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="Seta direita" />
                </button>
            </div>
            <div className="header__search">
                <img src={search} alt="Buscar" />
                <input
                    type="text"
                    maxLength={800}
                    autoCorrect='off'
                    autoCapitalize='off'
                    spellCheck='false'
                    placeholder='O que você quer ouvir' 
                />
            </div>
            <div className="header__login">
                <button className="subscribe">
                    Inscreva-se
                </button>
                <button className="login">
                    Entrar
                </button>
            </div>
        </nav>
    );
}


export default Header;