import { Link } from 'react-router-dom'
import '../styles/logementCard.scss';
export default function logementCard({data}) {
    const bannerImg = {
        background: `linear-gradient(to top, rgb(60, 60, 61) 8%, rgba(255, 255, 255, 0) 50%), url(${data.cover})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      };
    return (
      <>
      <Link to={`/fiche-logement/${data.id}`}>
        <div id="logement-card" style={bannerImg}><h1>{data.title}</h1></div>
      </Link>
      
      </>
    );
}