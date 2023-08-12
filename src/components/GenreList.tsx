import { HStack, List, ListItem, Text } from "@chakra-ui/layout";
import useGenres from "../hooks/useGenres";
import { Image } from "@chakra-ui/image";
import getCroppedImageUrl from "../services/image-url";
import { Spinner } from "@chakra-ui/spinner";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if(error) return null;
  if(isLoading) return <Spinner/>;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={5}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize={'lg'}>
                {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;