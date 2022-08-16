import { Container } from 'components/Container/Container';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Section } from 'components/Section/Section';
import * as API from '../service/Api';
import { Empty, Pagination } from 'antd';

export const Home = () => {
  const [trandingList, setTrandingList] = useState();
  const [error, setError] = useState();
  const [totalPage, setTotalPage] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');

  useEffect(() => {
    !page && setSearchParams({ page: 1 });
  }, [setSearchParams, page]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await API.getTrandingMovies(page);

        setTotalPage(data.total_pages);
        setTrandingList(data.results);
      } catch (error) {
        setError('An error has occured');
      }
    }
    fetchData();
  }, [page]);

  const onChange = p => {
    setSearchParams({ page: p });
    window.scrollTo(0, 0);
  };

  return (
    <Section>
      <Container>
        {!!trandingList && <MoviesList list={trandingList}></MoviesList>}
        {!!error && <Empty description={error} />}
        {!!trandingList && (
          <Pagination
            defaultCurrent={page}
            total={totalPage}
            onChange={onChange}
            style={{ display: 'flex', justifyContent: 'center' }}
          />
        )}
      </Container>
    </Section>
  );
};
