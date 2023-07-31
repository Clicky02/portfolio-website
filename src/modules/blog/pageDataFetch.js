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