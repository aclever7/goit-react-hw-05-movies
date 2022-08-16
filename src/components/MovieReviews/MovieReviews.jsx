import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as API from '../../service/Api';
import { Container } from 'components/Container/Container';
import { Reviews } from './Reviews/Reviews';
import { LoadingOutlined } from '@ant-design/icons';

export const MovieReviews = () => {
  const [reviewsMovie, setReviewsMovie] = useState();
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        setLoading(true);
        const reviews = await API.getReviewsOfTheMovie(movieId);

        setReviewsMovie(reviews.results);
        setLoading(false);
      } catch {
        setLoading(false);
        setReviewsMovie(null);
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
      {reviewsMovie?.length !== 0 && !!reviewsMovie ? (
        <Reviews reviewsMovie={reviewsMovie} />
      ) : (
        !loading && <p>We don`t have any reviews for this movie</p>
      )}
    </Container>
  );
};
