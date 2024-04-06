import BrewCall from "../components/BrewCall";
import BrewLogo from '../assets/WalkingBeer.jpg'
import '../styles/detailview.css'

const DetailView = () => {
    return(
        <>
            <img className='brewLogo' src={BrewLogo} width={300}/>
            <div className="brewCallContainer">
                <BrewCall />
            </div>
        </>
    );
}

export default DetailView;