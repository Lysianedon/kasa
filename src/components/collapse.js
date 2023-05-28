import '../styles/collapse.scss';
import chevron from '../assets/chevron-haut.png'
export default function Collapse({data}) {
    return (
      <>
        <div id="collapse">
            <div className="header"> <span>{data.header}</span> <img src={chevron} alt='chevron haut'/></div>
            <div className="content"> {data.content} </div>
        </div>
      </>
    );
  }