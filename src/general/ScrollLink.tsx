import React from "react";
import { Button } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

const ScrollLinkBase = React.forwardRef((props: any, ref) => (
    <ScrollLink className="NoDecoration NoSelect PointerCursor" spy smooth offset={-70} duration={500} {...props} />
));

const ScrollLinkButton = (props: any) => <Button component={ScrollLinkBase} {...props} />;

export { ScrollLinkBase };
export default ScrollLinkButton;
