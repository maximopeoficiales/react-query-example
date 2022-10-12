import { useState } from "react";
import { QueryFunctionContext, useQuery } from "react-query"
import { PhotoCard } from "./components/PhotoCard";
import { Photo } from "./interfaces/Photo";

import { Heading, SimpleGrid, GridItem, Button } from '@chakra-ui/react';
import { Box } from "@chakra-ui/layout";
import { Loading } from "./components/Loading";



export const App = () => {


  const [page, setPage] = useState(1);

  const getProducts = async ({ queryKey }: QueryFunctionContext<(string | number)[], any>) => {
    let page = +queryKey[1];
    const limit = 5;
    const start = page === 1 ? 0 : ((page * limit) - limit);
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`);
    const data = response.json();
    return data as unknown as Photo[];
  }

  const { data, status } = useQuery(['products', page], getProducts, {
    cacheTime: 120000,
  });

  if (status === 'loading') {
    return <Loading msg="Cargando...." />;
  }

  if (status === 'error') {
    return <p>Error</p>;
  }

  return <div>
    <Heading as='h1' size='2xl' noOfLines={1} textAlign="center" marginTop={4}>
      List Photos {page}
    </Heading>

    <Box display={"flex"} justifyContent="center" marginTop={4}>
      <Box className="">

        <Button onClick={() => {
          setPage((page) => {
            return page === 1 ? 1 : page - 1;
          })
        }} colorScheme='pink' size='md' marginRight={3}>
          Previous
        </Button>

        <Button onClick={() => setPage(page + 1)} colorScheme='pink' size='md'>
          Next
        </Button>
      </Box>

    </Box>
    <SimpleGrid columns={[1, 4]} gap={"4"} padding="8">
      {data?.map(prod => (
        <GridItem w='100%' key={prod.id} display="block">
          <PhotoCard photo={prod} />
        </GridItem >
      ))}
    </SimpleGrid>
  </div>
}

