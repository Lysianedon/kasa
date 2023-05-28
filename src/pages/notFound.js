import { useRouteError, Link } from "react-router-dom";
import '../styles/notFound.scss'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}