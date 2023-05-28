import '../styles/banner.scss';
export default function Banner({size, backgroundImg, bannerSentence}) {
    const bannerStyle = {
        backgroundImage: `url(${backgroundImg})`,
      };
    return (
      <>
        <div id={size} className="banner" style={bannerStyle}>
            <div className='bannerSentence'>{bannerSentence}</div>
        </div>
      </>
    );
}