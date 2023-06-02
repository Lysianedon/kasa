import Banner from '../components/banner';
import mountainsImg from '../assets/mountains.png';
import '../styles/aPropos.scss'
import Collapse from '../components/collapse';
import values from '../data/values.json';
export default function APropos() {

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