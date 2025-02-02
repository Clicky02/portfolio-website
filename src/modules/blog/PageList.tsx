import preval from "preval.macro";

export type BlogPage = {
    id: string;
    title: string;
    author: string;
    date?: Date;
    tags: string[];
    isPinned: boolean;
    location: string;
};

const rawPages: any[] = preval`
module.exports=require(__dirname +'/pageDataFetch.cjs');
`;

const pages: BlogPage[] = [];
const tags: string[] = [];

for (const rawPage of rawPages) {
    const page: BlogPage = {
        id: rawPage.id,
        title: rawPage.title,
        author: rawPage.author || "Gareth Fultz",
        date: rawPage.date !== undefined ? new Date(rawPage.date) : undefined,
        tags: rawPage.tags || [],
        isPinned: rawPage.isPinned || false,
        location: rawPage.location,
    };

    if (page.isPinned) {
        pages.unshift(page);
    } else {
        pages.push(page);
    }

    for (const tag of page.tags) {
        if (tags.indexOf(tag) === -1) {
            tags.push(tag);
        }
    }
}

export const BlogTags = tags;
export default pages;
