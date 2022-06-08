import Header from '../../components/header';
import { useParams, useSearchParams } from 'react-router-dom';

export const CategoryDetail = () => {
  let params = useParams();
  let [query, setQuery] = useSearchParams();

  query.keys('id');
  return (
    <>
      <Header />
      <h3>
        CatagoriesDetails - {params.slug} - {query.get('id')}
      </h3>
    </>
  );
};
