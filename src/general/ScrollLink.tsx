import { Button } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

const ScrollLinkBase = (props: any) => <ScrollLink spy smooth offset={-70} duration={500} {...props} />;

const ScrollLinkButton = (props: any) => <Button component={ScrollLinkBase} {...props} />;

export { ScrollLinkBase };
export default ScrollLinkButton;
