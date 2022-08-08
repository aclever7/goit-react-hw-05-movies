import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Card } from 'antd';
import PropTypes from 'prop-types';
import { Item, MovieCard, Img } from './MovieItem.styled';

const Meta = { Card };

export const MovieItem = ({ id, title, img }) => {
  let location = useLocation();

  const poster = !!img
    ? `https://image.tmdb.org/t/p/w500/${img}`
    : 'https://www.remosoftware.com/info/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png';

  return (
    <Item>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <MovieCard hoverable cover={<Img alt={title} src={poster} />}>
          <Meta title={title} description={title} />
        </MovieCard>
      </Link>
    </Item>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
};
