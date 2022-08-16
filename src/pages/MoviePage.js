import { Movie } from 'components/Movie/Movie';
import { useEffect, useState, Suspense } from 'react';
import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Section } from 'components/Section/Section';
import * as API from '../service/Api';
import { Container } from 'components/Container/Container';
import { Empty, Button, Tabs } from 'antd';
import { ArrowLeftOutlined, LoadingOutlined } from '@ant-design/icons';

export const MoviePage = () => {
  const [movie, setMovie] = useState();
  const [error, setError] = useState();

  const { movieId } = useParams();

  let { state } = useLocation();

  const { TabPane } = Tabs;

  let navigate = useNavigate();

  useEffect(() => {
    async function fetchMovie() {
      try {
        const movie = await API.getMovieById(movieId);
        setMovie(movie);
      } catch {
        setError('No info about this movie');
      }
    }
    fetchMovie();
  }, [movieId]);

  const onChange = key => {
    if (key === '1') {
      navigate(`/movies/${movieId}/cast`, { state: { from: state.from } });
    } else if (key === '2') {
      navigate(`/movies/${movieId}/reviews`, { state: { from: state.from } });
    }
  };

  const goBack = () => {
    state?.from
      ? navigate(state.from.pathname + state.from.search)
      : navigate('/');
  };

  return (
    <Section>
      <Container>
        <Button type="text " icon={<ArrowLeftOutlined />} onClick={goBack}>
          Go back
        </Button>
      </Container>

      {!!movie && (
        <>
          <Movie movie={movie} />
          <Container>
            <Tabs activeKey="3" onChange={onChange}>
              <TabPane tab="Cast" key="1"></TabPane>
              <TabPane tab="Reviews" key="2"></TabPane>
            </Tabs>
          </Container>
          <Suspense
            fallback={
              <LoadingOutlined
                style={{
                  fontSize: 36,
                  display: 'flex',
                  justifyContent: 'center',
                }}
                spin
              />
            }
          >
            <Outlet />
          </Suspense>
        </>
      )}
      {!movie && <Empty description={error} />}
    </Section>
  );
};
