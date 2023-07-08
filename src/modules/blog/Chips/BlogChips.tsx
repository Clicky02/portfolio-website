import { Chip, Stack } from "@mui/material";

type Props = {
    tags: string[];
};

const BlogChips = (props: Props) => {
    return (
        <Stack direction={"row"} spacing={1}>
            {props.tags.map((value, i) => (
                <Chip label={value} key={i} />
            ))}
        </Stack>
    );
};

export default BlogChips;
