import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import { FormForTable } from "../FormForTable";
import { updateGroup } from "../../http/groupAPI";
import { SelectedForTable } from "../SelectedForTable";
import { useAppSelector } from "../../store/hooks";

interface Props {
  arr: Group | undefined;
}

export const GroupTable: React.FC<Props> = ({ arr }) => {
  const { cities, musicStyleData } = useAppSelector((state) => state.groups);
  const url = process.env.REACT_APP_API_URL as string;
  console.log(arr?.["image.image_data"]);

  if (arr !== undefined) {
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
              src={url + arr["image.image_data"]}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
          </GridItem>
          <GridItem colSpan={6} colStart={2}>
            <FormForTable
              id={arr.id}
              item={arr.group_name}
              update_col="group_name"
              updateFunc={updateGroup}
            />
          </GridItem>
          <GridItem colSpan={2}>
            <SelectedForTable
              id={arr.id}
              item={String(arr["music_style.style_name"])}
              update_col="music_style_id"
              updateFunc={updateGroup}
            >
              {musicStyleData.map((item) => (
                <option value={item.id}>{item.style_name}</option>
              ))}
            </SelectedForTable>
          </GridItem>

          <GridItem colSpan={2}>
            <Flex direction={"row"} align={"center"} justify={"space-around"}>
              Год создания:
              <FormForTable
                id={arr.id}
                item={String(arr.creation_year)}
                update_col="creation_year"
                updateFunc={updateGroup}
              />
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            <SelectedForTable
              id={arr.id}
              item={String(arr["city.city_name"])}
              update_col="city_id"
              updateFunc={updateGroup}
            >
              {cities.map((item) => (
                <option value={item.id}>{item.city_name}</option>
              ))}
            </SelectedForTable>
          </GridItem>
          <GridItem colSpan={6} colStart={2} rowSpan={3}>
            <FormForTable
              id={arr.id}
              item={arr.description}
              update_col="description"
              updateFunc={updateGroup}
              style={{ width: "74em", height: "5em" }}
            />
          </GridItem>
        </Grid>
      </Box>
    );
  } else return null;
};
