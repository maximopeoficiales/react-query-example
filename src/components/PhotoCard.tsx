import { Photo } from "../interfaces/Photo"
import { Box } from "@chakra-ui/layout";
import { Image, Heading } from '@chakra-ui/react';

export const PhotoCard = ({ photo }: { photo: Photo }) => {
  return (
    <Box p='6' borderWidth='1px' borderRadius='lg' h={"250px"} shadow="lg">
      <Box display="flex" alignItems={"center"} justifyContent="center">
        <Image src={photo.thumbnailUrl} alt={photo.thumbnailUrl} />
      </Box>
      <Heading as='h5' size='sm' textAlign={"center"} padding="4" >
        {photo.title}
      </Heading>

    </Box >
  )

}