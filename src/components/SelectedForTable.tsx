import { Button, Flex, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { updateAlbum } from "../http/albumAPI";
import { useAppSelector } from "../store/hooks";

interface Props {
  item: null | string;
  id: number;
  update_col: string;
  func: any;
}

export const SelectedForTable: React.FC<Props> = ({
  id,
  item,
  update_col,
  func,
}) => {
  const [value, setValue] = useState<any>("");

  const mus = useAppSelector((state) => state.groups.musicStyleData);

  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>
      {
        <Select
          placeholder={item || "не указан"}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          {mus.map((itm) => (
            <option value={itm.id}>{itm.style_name}</option>
          ))}
        </Select>
      }
      <Button
        size={"xs"}
        p={0}
        bgColor={"lightgreen"}
        onClick={() => {
          func(id, { [update_col]: value });
          setValue("");
        }}
        style={{
          display: value.length === 0 ? "none" : "",
        }}
      >
        <IoCheckmark size={10} />
      </Button>
    </Flex>
  );
};
