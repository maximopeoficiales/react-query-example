import { useState } from "react";
import { QueryFunctionContext, useQuery } from "react-query"
import { PhotoCard } from "./components/PhotoCard";
import { Photo } from "./interfaces/Photo";

export const App = () => {


  const [page, setPage] = useState(1);

  const getProducts = async ({ queryKey }: QueryFunctionContext<(string | number)[], any>) => {
    let page = +queryKey[1];
    const limit = 5;
    const start = page === 1 ? 0 : ((page * limit) - limit);
    const response = await fetch(`http://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`);
    const data = response.json();
    return data as unknown as Photo[];
  }

  const { data, status } = useQuery(['products', page], getProducts, {
    cacheTime: 120000,
  });

  if (status === 'loading') {
    return <p>Recuperando los productos...</p>;
  }

  if (status === 'error') {
    return <p>Error</p>;
  }

  return <div>
    <h2>List Photos {page}</h2>
    <div>
      <button onClick={() => {
        setPage((page) => {
          return page === 1 ? 1 : page - 1;
        })
      }}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
    <div className="photos">
      {data?.map(prod => (
        <PhotoCard photo={prod} key={prod.id} />
      ))}
    </div>
  </div>
}

