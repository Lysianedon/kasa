import '../styles/homepage.scss';
import Banner from '../components/banner';
import homepageImg from '../assets/homepage-img.png';
import logements from '../data/accomodations.json';
import AccomodationCard from '../components/accomodationCard';
export default function Homepage() {
  const listItems = logements.map(logement => 
    <div className="card" key={logement.id}>
      <AccomodationCard data={logement} />
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