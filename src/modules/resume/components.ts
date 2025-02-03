export interface Showable {
    showIn: DocType;
}

export type Resume = {
    name: string;
    info: ListEntry[];
    sections: Category[];
    footer: string;
};

export type Category = {
    title: string;
    blocks: Block[];
    showIn: DocType;
};

export enum DocType {
    None = 0,
    Short = 1 << 0,
    Full = 1 << 1,
    All = Short | Full,
}

export function Category(title: string, blocks: Block[], showIn: DocType = DocType.All): Category {
    return {
        title: title,
        blocks: blocks,
        showIn: showIn,
    };
}

export type Block = {
    title?: Title;
    subtitle?: Title;
    entries?: Entry[];
    showIn: DocType;
};

export function Block(title: Title | undefined, subtitle: Title | undefined, entries: Entry[], showIn: DocType = DocType.All): Block {
    return {
        title: title,
        subtitle: subtitle,
        entries: entries,
        showIn: showIn,
    };
}

export type Title = {
    title: string;
    desc?: string;
    info?: string;
};

export function Title(title: string, desc: string | undefined = undefined, info: string | undefined = undefined): Title {
    return {
        title: title,
        desc: desc,
        info: info,
    };
}


export type DateRange = {
    start: Date,
    end: Date | null,
    seasonal: boolean
}

export function DateRange(start: Date, end: Date | null = null, seasonal: boolean = false): DateRange {
    return {
        start: start,
        end: end,
        seasonal: seasonal,
    };
}

export type Entry = Val | ListEntry;

export type Val = {
    type: "value";
    text: string;
    showIn: DocType;
};

export function Val(text: string, showIn: DocType = DocType.All): Val {
    return {
        type: "value",
        text: text,
        showIn: showIn,
    };
}

export type ListEntry = {
    type: "list";
    prefix?: string;
    values: Val[];
    separator: string;
    showIn: DocType;
};

export function ListEntry(prefix: string | undefined, values: Val[], separator: string = ", ", show_in: DocType = DocType.All): ListEntry {
    return {
        type: "list",
        prefix: prefix,
        values: values,
        separator: separator,
        showIn: show_in,
    };
}