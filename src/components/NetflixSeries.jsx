import seriesData from '../api/seriesData.json'

const NetFlixSeries = () => {
    return (
        <ul>
            {seriesData.map((series) => {
                return (
                  <li key={series.id}>
                    <div>
                      <img
                        src={series.img_url}
                        alt={series.name}
                        width="40%"
                        height="40%"
                      />
                    </div>
                    <h2>Name: {series.name}</h2>
                    <h3>Rating: {series.rating}</h3>
                    <p>Summery: {series.description}</p>
                    <p>Genre: {series.genre}</p>
                        <p>Cast: {series.cast}</p>
                        <a href={series.watch_url} target='_blank'>
                            <button>Watch Now</button>
                        </a>
                  </li>
                ); 
                
            })}
      </ul>
  )
};
export default NetFlixSeries;