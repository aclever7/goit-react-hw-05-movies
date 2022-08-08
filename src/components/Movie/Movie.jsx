import { Container } from 'components/Container/Container';
import { Content, MovieImg, Img, Aside, Title, About } from './Movie.styled';
import { Descriptions } from 'antd';
import PropTypes from 'prop-types';

export const Movie = ({ movie }) => {
  const poster = !!movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : 'https://www.remosoftware.com/info/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png';

  return (
    <Container>
      <Title>{movie?.original_title}</Title>
      <Content>
        <MovieImg>
          <Img src={poster} alt={movie?.original_title}></Img>
        </MovieImg>
        <Aside>
          <Descriptions column={1}>
            <Descriptions.Item label="Rating">
              {movie?.vote_average} ({movie?.vote_count})
            </Descriptions.Item>
            <Descriptions.Item label="Release date">
              {movie.release_date ? movie.release_date.slice(0, 4) : ''}
            </Descriptions.Item>
            <Descriptions.Item label="Country">
              {movie?.production_countries[0]?.name}
            </Descriptions.Item>
            <Descriptions.Item label="Production companies">
              {movie?.production_companies.map(c => c.name).join(', ')}
            </Descriptions.Item>
            <Descriptions.Item label="Genres">
              {movie?.genres.map(g => g.name).join(', ')}
            </Descriptions.Item>
            <Descriptions.Item label="Genres">
              {movie?.status}
            </Descriptions.Item>
            <Descriptions.Item label="Genres">
              {movie?.runtime} min.
            </Descriptions.Item>
          </Descriptions>
        </Aside>
      </Content>
      <About>
        <h2>About:</h2>
        <p>{movie.overview}</p>
      </About>
    </Container>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};
