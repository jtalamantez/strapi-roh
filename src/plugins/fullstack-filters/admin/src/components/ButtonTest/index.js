import React from "react";
import { Button } from "@strapi/design-system";
import Up from "@strapi/icons";

const ButtonTest = () => {
  return (
    <Button
      variant="secondary"
      startIcon={<Up />}
      onClick={() => alert("Hello World")}
    >
      Hello World
    </Button>
  );
};

export default ButtonTest;