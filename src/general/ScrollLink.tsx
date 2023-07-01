import { Button } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

const ScrollLinkBase = (props: any) => (
    <ScrollLink
        className="NoDecoration NoSelect PointerCursor"
        spy
        smooth
        offset={-70}
        duration={500}
        scrolling="test"
        spyThrottle={10000}
        {...props}
    />
);

const ScrollLinkButton = (props: any) => <Button component={ScrollLinkBase} {...props} />;

export { ScrollLinkBase };
export default ScrollLinkButton;
