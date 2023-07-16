import {  useParams, Navigate } from 'react-router-dom'
import logements from '../data/logements.json';
import "../styles/ficheLogement.scss";
import Collapse from '../components/collapse';
import ProfileThumbnail from '../components/profileThumbnail';
import Tag from '../components/tag';
import Star from '../components/stars';
import Carousel from '../components/carousel';
export default function FicheLogement() {
  let { id } = useParams();
  let logementData = logements.find((log) => log.id === id);
  if (!logementData) {
    return <Navigate to="/not-found" replace={true} />;
  }
  const tags = logementData.tags.map(t => <div className='tag' key={t}><Tag tag={t}/></div> )

    return (
      <div id="fiche-logement">
        <Carousel pictures={logementData.pictures} altImg={logementData.title}/>
      <section className="header-infos">
        <div className="title-tags">
          <h1> {logementData.title}</h1>
          <h3>{logementData.location}</h3>
          <div className="tags">
          {tags}
          </div>
        </div>
        <div className="profile-stars">
          <ProfileThumbnail name={logementData.host.name} picture={logementData.host.picture}/>
          <div className='rating stars'><Star rating={logementData.rating} /></div>
        </div>
      </section>

      <section className='description-equipments'>
        <div>
        <Collapse header='Description' content ={logementData.description} size='medium-size'/>
        </div>
        <div className='collapse'>
        <Collapse header='Équipements' content ={logementData.equipments} size='medium-size'/>
        </div>
      </section>
        
      </div>
    );
  }