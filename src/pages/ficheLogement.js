import {  useParams, Navigate } from 'react-router-dom'
import logements from '../data/logements.json';
export default function FicheLogement() {
  let { id } = useParams();
  let logementData = logements.find((log) => log.id === id);
  if (!logementData) {
    return <Navigate to="/not-found" replace={true} />;
  }
    return (
      <>
        <div> { logementData.title}</div>
      </>
    );
  }