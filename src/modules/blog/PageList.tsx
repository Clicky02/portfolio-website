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

//module.exports=require(__dirname +'/pageDataFetch.js');
const rawPages: any[] = preval`
const fs = require('fs');
const path = require('path');
const frontmatter = require('@github-docs/frontmatter')

const blogPageDir = path.join('public', 'assets', 'blog', 'pages');
const fileNames = fs.readdirSync(blogPageDir);

const fileContents = []
for (const fileName of fileNames) {
    const fileLocation = path.join(blogPageDir, fileName);
    let data = "none"
    try {
        const { data, _ } = frontmatter(fs.readFileSync(fileLocation, 'utf8'));
        fileContents.push({
            id: fileName,
            ...data,
            location: fileName
        });
    } catch (err) {
        fileContents.push(err);
    }
}

module.exports = fileContents;
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
