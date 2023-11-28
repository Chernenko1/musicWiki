import {
  Box,
  Button,
  Editable,
  EditablePreview,
  EditableTextarea,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoCheckmark, IoClose } from "react-icons/io5";
import { updateAlbum } from "../http/albumAPI";

interface Props {
  item: null | string;
  id: number;
  update_col: string;
}

export const FormForTable: React.FC<Props> = ({ id, item, update_col }) => {
  const [value, setValue] = useState<any>("");

  return (
    <Box>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Editable
          defaultValue={
            item === null || item.length === 0 ? "нет записи" : item
          }
        >
          <EditablePreview />
          <EditableTextarea
            onChange={(e) => {
              setValue(e.target.value);
            }}
            // onFocus={() => setActiveIndex(index)}
          />
        </Editable>
        <Button
          size={"xs"}
          p={0}
          bgColor={"lightgreen"}
          onClick={() => {
            updateAlbum(id, { [update_col]: value });
            setValue("");
          }}
          style={{
            display: value.length === 0 ? "none" : "",
          }}
        >
          <IoCheckmark size={10} />
        </Button>
        <Button
          size={"xs"}
          p={0}
          bgColor={"indianred"}
          onClick={() => setValue("")}
          style={{
            display: value.length === 0 ? "none" : "",
          }}
        >
          <IoClose size={10} />
        </Button>
      </Flex>
    </Box>
  );
};
