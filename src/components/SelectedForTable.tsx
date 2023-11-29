import { Button, Flex, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";

interface Props {
  item: null | string;
  id: number;
  update_col: string;
  updateFunc: any;
  delFunc?: any;
  children?: React.ReactNode;
}

export const SelectedForTable: React.FC<Props> = ({
  id,
  item,
  update_col,
  updateFunc,
  delFunc,
  children,
}) => {
  const [value, setValue] = useState<any>("");

  console.log(value);

  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>
      {
        <Select
          placeholder={item || "не указан"}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          {children}
        </Select>
      }
      <Button
        size={"xs"}
        p={0}
        bgColor={"lightgreen"}
        onClick={() => {
          updateFunc(id, { [update_col]: value });
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
