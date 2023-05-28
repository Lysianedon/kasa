import Banner from '../components/banner';
import mountainsImg from '../assets/mountains.png';
import '../styles/aPropos.scss'
import Collapse from '../components/collapse';
export default function APropos() {
  const values = [
    {
      header: "Fiabilité",
      content:  "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
      header: "Respect",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      header: "Service",
      content:  "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    { 
      header: "Sécurité",
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    },
  ]

  const listValues = values.map(value => {
    return <div className='value' key={value.header}>
      <Collapse data={value}/>
    </div>
  })
    return (
      <div id="a-propos">
        <Banner size="small" backgroundImg={mountainsImg} />
       <div className="list-values"> {listValues}</div>
      </div>
    );
  }