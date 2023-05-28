import '../styles/homepage.scss';
import Banner from '../components/banner';
import homepageImg from '../assets/homepage-img.png';
import logements from '../data/logements.json';
import LogementCard from '../components/logementCard';
export default function Homepage() {
  const listItems = logements.map(logement => 
    <div className="card" key={logement.id}>
      <LogementCard data={logement} />
    </div>
  )
    return (
      <>
      <Banner size="small" backgroundImg={homepageImg} bannerSentence="Chez vous, partout et ailleurs"/>
      <section className='main logements'>
        {listItems}
        <div className="spacer"></div>
      </section>   
      </>
    );
  }