import { Box, Typography } from "@mui/material";
import { Block, Category, DocType, Entry, ListEntry, Resume, Showable, Title } from "./components";
import React from "react";

export type ResumeRendererProps = {
    resume: Resume;
    docType: DocType;
};

export function ResumeRenderer({ resume, docType }: ResumeRendererProps) {
    const matches = matchesDocType(docType);

    const infoEl = (entry: ListEntry, i: number) => (
        <Typography textAlign={"center"} key={i}>
            {listEntryStr(entry, docType)}
        </Typography>
    );

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

    const listEl = (entry: Entry, i: number) => {
        let text: string;
        if (entry.type === "list") {
            text = listEntryStr(entry, docType);
        } else {
            text = entry.text;
        }

        return (
            <li key={i}>
                <Typography>{text}</Typography>
            </li>
        );
    };

    const blockEl = (block: Block, i: number, blocks: Block[]) => {
        return (
            <React.Fragment key={i}>
                {block.title && titleEl(block.title, false)}
                {block.subtitle && titleEl(block.subtitle, true)}
                {block.entries && block.entries.length > 0 && (
                    <Box component={"ul"} margin={0} pb={i + 1 != blocks.length ? 0.75 : 0}>
                        {block.entries.filter(matches).map(listEl)}
                    </Box>
                )}
            </React.Fragment>
        );
    };

    const categoryEl = (category: Category, i: number, categories: Category[]) => {
        return (
            <React.Fragment key={i}>
                <Typography variant="h2">{category.title}</Typography>
                {category.blocks.filter(matches).map(blockEl)}
                {i + 1 != categories.length && <Box pb={0.75} />}
            </React.Fragment>
        );
    };

    const hasFooter = resume.footer !== undefined;
    return (
        <Box component={hasFooter ? "table" : "div"} display="flex" flexGrow={1} flexDirection={"column"}>
            <Typography variant="h1">{resume.name}</Typography>
            <Box pb={0.75} />
            {resume.info.filter(matches).map(infoEl)}
            <Box pb={0.75} />
            {resume.sections.filter(matches).map(categoryEl)}
            <Box sx={{ pb: 1, "@media print": { flexGrow: 1, padding: 0 } }} />
            {hasFooter && (
                <tfoot>
                    <Typography variant="body2" textAlign="left">
                        {resume.footer}
                    </Typography>
                </tfoot>
            )}
        </Box>
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
