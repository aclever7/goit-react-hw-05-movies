import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../service/Api';
import { Container } from 'components/Container/Container';
import { LoadingOutlined } from '@ant-design/icons';
import { CastList } from './CastList/CastList';

export const MovieCast = () => {
  const [castMovie, setCastMovie] = useState();
  const [loading, setLoading] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        setLoading(true);
        const { cast } = await API.getCastOfTheMovie(movieId);
        setCastMovie(cast);
        setLoading(false);
      } catch {
        setLoading(false);
        setCastMovie(null);
      }
    }
    fetchCast();
  }, [movieId]);

  return (
    <Container>
      {loading && (
        <LoadingOutlined
          style={{ fontSize: 36, display: 'flex', justifyContent: 'center' }}
          spin
        />
      )}
      {!!castMovie ? (
        <CastList castMovie={castMovie} />
      ) : (
        !loading && <p>There is no information about the cast of the film</p>
      )}
    </Container>
  );
};
