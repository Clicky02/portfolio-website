import { Box, Typography } from "@mui/material";
import { Block, Category, DocType, Entry, ListEntry, Resume, Showable, Title } from "./components";

export type ResumeRendererProps = {
    resume: Resume;
    docType: DocType;
};

export function ResumeRenderer({ resume, docType }: ResumeRendererProps) {
    const matches = matchesDocType(docType);

    const infoEl = (entry: ListEntry) => <Typography textAlign={"center"}>{listEntryStr(entry, docType)}</Typography>;

    const titleEl = (title: Title, subtitle: boolean) => (
        <Box display="flex" alignItems="left">
            <Typography variant={subtitle ? "h4" : "h3"}>
                <b>{title.title}</b>
                {title.desc && ` | ${title.desc}`}
            </Typography>
            {title.info && (
                <>
                    <Box flexGrow={1} />
                    <Typography variant="body2">{title.info}</Typography>
                </>
            )}
        </Box>
    );

    const listEl = (entry: Entry) => {
        let text: string;
        if (entry.type === "list") {
            text = listEntryStr(entry, docType);
        } else {
            text = entry.text;
        }

        return (
            <li>
                <Typography>{text}</Typography>
            </li>
        );
    };

    const blockEl = (block: Block) => {
        return (
            <>
                {block.title && titleEl(block.title, false)}
                {block.subtitle && titleEl(block.subtitle, true)}
                {block.entries && block.entries.length > 0 && (
                    <Box component={"ul"} margin={0} pb={0.5}>
                        {block.entries.filter(matches).map(listEl)}
                    </Box>
                )}
            </>
        );
    };

    const categoryEl = (category: Category) => {
        return (
            <>
                <Typography variant="h2">{category.title}</Typography>
                {category.blocks.filter(matches).map(blockEl)}
                <Box pb={1} />
            </>
        );
    };

    return (
        <table>
            <Typography variant="h1">{resume.name}</Typography>
            {resume.info.filter(matches).map(infoEl)}
            <Box pb={0.5} />
            {resume.sections.filter(matches).map(categoryEl)}
            <tfoot>
                <Typography variant="body2" textAlign="left">
                    {resume.footer}
                </Typography>
            </tfoot>
        </table>
    );
}

function listEntryStr(entry: ListEntry, docType: DocType): string {
    return (
        (entry.prefix ? entry.prefix + ": " : "") +
        entry.values
            .filter(matchesDocType(docType))
            .map((val) => val.text)
            .join(entry.separator)
    );
}

function matchesDocType(docType: DocType) {
    return (showable: Showable) => (showable.showIn & docType) > 0;
}
