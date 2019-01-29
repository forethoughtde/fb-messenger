import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module)
  .add("default Button", () => <Button>Save</Button>)
  .add("large Button", () => <Button large>Save</Button>)
  .add("block Button", () => <Button block>Save</Button>)
  .add("primary Button", () => <Button primary>Save</Button>);
