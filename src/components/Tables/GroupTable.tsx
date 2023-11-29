import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  arr: Group;
}

export const GroupTable: React.FC<Props> = ({ arr }) => {
  return (
    <Box>
      <Grid
        templateRows={"repeat(5,1fr)"}
        templateColumns={"repeat(7,1fr)"}
        gap={2}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <GridItem rowSpan={5} colSpan={1}>
          <Image
            src="https://infosmi.net/wp-content/uploads/2022/02/96109038.jpg"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </GridItem>
        <GridItem colSpan={6} colStart={2}>
          <Text>{arr.group_name}</Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Text>Стиль музыки: {arr["music_style.style_name"]}</Text>
        </GridItem>

        <GridItem colSpan={2}>
          <Text>Год основания: {arr.creation_year}</Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Text>Город: {arr["city.city_name"]}</Text>
        </GridItem>
        <GridItem colSpan={6} colStart={2} rowSpan={3}>
          <Text> {arr.description}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};
