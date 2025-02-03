import { Block, DateRange, DocType, ListEntry, Title, Val } from "./components";

function dateRangeString(val: DateRange): string {
    return `${dateString(val.start)} - ${val.end ? dateString(val.end) : "Present"}${val.seasonal ? " (Seasonal)" : ""}`;
}

function dateString(val: Date): string {
    return val.toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
    });
}

// function listEntry(prefix: string | null, values: string[]): Entry {
//     return {
//         text: (prefix ? `${prefix}: ` : prefix) + values.join(", "),
//     };
// }

export function education(
    school: string,
    degree: string,
    major: string,
    graduation_date: Date,
    gpa: number,
    courses: Val[],
    show_in: DocType = DocType.All
): Block {
    return {
        title: Title(school, undefined, `Graduating: ${dateString(graduation_date)}`),
        subtitle: Title(`${degree} - ${major}`, undefined, `GPA: ${gpa.toFixed(1)}`),
        entries: [ListEntry("Primary Coursework", courses)],
        showIn: show_in,
    };
}

export function work(company: string, position: string, duration: DateRange, info: Val[], show_in: DocType = DocType.All): Block {
    return {
        title: Title(company, position, dateRangeString(duration)),
        entries: info,
        showIn: show_in,
    };
}

export function project(name: string, duration: DateRange, info: Val[], show_in: DocType = DocType.All): Block {
    return {
        title: Title(name, undefined, dateRangeString(duration)),
        entries: info,
        showIn: show_in,
    };
}

export function activity(name: string, role: string, duration: DateRange, show_in: DocType = DocType.All): Block {
    return {
        title: Title(name, role, dateRangeString(duration)),
        showIn: show_in,
    };
}

export function award(name: string, duration: DateRange | Date | string, show_in: DocType = DocType.All): Block {
    let date_str;
    if (typeof duration === "string") {
        date_str = duration;
    } else if (duration instanceof Date) {
        date_str = dateString(duration);
    } else {
        date_str = dateRangeString(duration);
    }

    return {
        title: Title(name, undefined, date_str),
        showIn: show_in,
    };
}
