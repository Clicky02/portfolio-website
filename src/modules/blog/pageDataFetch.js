const fs = require('fs');
const path = require('path');
const frontmatter = require('@github-docs/frontmatter')


const dir = path.join(__dirname, 'pages');
const fileNames = fs.readdirSync(dir);

const fileContents = []
for (const fileName of fileNames) {
    const fileLocation = path.join(dir, fileName);
    let data = "none"
    try {
        console.log(frontmatter);
        const { data, content } = frontmatter(fs.readFileSync(fileLocation, 'utf8'));
        fileContents.push({
            id: fileName,
            ...data,
            content: content
        });
    } catch (err) {
        fileContents.push(err);
    }
}

module.exports = fileContents;