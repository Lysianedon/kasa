import '../styles/profileThumbnail.scss';

export default function ProfileThumbnail({name, picture}) {   
      return (
        <div id="profile-thumbnail">
            <h4>{name}</h4>
            <img src={picture} alt="host" />

        </div>
      );
    }