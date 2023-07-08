import preval from "preval.macro";

type BlogPage = {
    id: string;
    title: string;
    author: string;
    date: string;
    tags: string[];
    content: string;
};

const pages: BlogPage[] = preval`
    module.exports=require(__dirname +'/pageDataFetch.js');
`;

export default pages;
