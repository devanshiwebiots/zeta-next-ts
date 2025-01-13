import { CommonPopoverProp } from "@/Type/UiKits";
import React, { useState } from "react";
import { Button, Popover, PopoverBody, PopoverHeader } from "reactstrap";

const CommonPopover = ({ item }: CommonPopoverProp) => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);
  return (
    <>
      <Button color={item.buttonColor} className="example-popover" id={`${"Popover-" + item.id}`}>
        {item.buttonText}
      </Button>
      <Popover placement={item.placement} isOpen={popover} target={"Popover-" + item.id} toggle={Toggle} trigger={item.trigger}>
        <PopoverHeader>{item.popoverHeader}</PopoverHeader>
        <PopoverBody>{item.popoverBody}</PopoverBody>
      </Popover>
    </>
  );
};

export default CommonPopover;
