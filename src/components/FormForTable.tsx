import {
  Button,
  Editable,
  EditablePreview,
  EditableTextarea,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoCheckmark, IoClose } from "react-icons/io5";
interface Props {
  item: null | string;
  id: number;
  update_col: string;
  updateFunc: any;
  delFunc?: any;
  style?: { width: string; height: string };
}

export const FormForTable: React.FC<Props> = ({
  id,
  item,
  update_col,
  updateFunc,
  delFunc,
  style,
}) => {
  const [value, setValue] = useState<any>("");

  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>
      <Editable
        defaultValue={
          item === null || item.length === 0 ? "нет записи" : String(item)
        }
      >
        <EditablePreview noOfLines={3} />
        <EditableTextarea
          onChange={(e) => {
            setValue(e.target.value);
          }}
          style={style}
        />
      </Editable>
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
  );
};
