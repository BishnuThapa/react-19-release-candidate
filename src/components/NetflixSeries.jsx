import seriesData from '../api/seriesData.json'
import SeriesCard from './SeriesCard';

const NetFlixSeries = () => {
    return (
        <ul>
            {seriesData.map((series) => {
                return <SeriesCard key={series.id} series={series} />;
            })}
      </ul>
  )
};
export default NetFlixSeries;