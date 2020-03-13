const fs = require("fs");
const path = require("path");
const parser = require("parser-front-matter");
const showdown = require("showdown");

const converter = new showdown.Converter();

const postsDir = path.resolve("./src/pages/posts");
const apiDir = path.resolve("./static/api");

const postFiles = fs.readdirSync(postsDir);

const postsByTag = {};

if(fs.existsSync(apiDir)) {
  fs.rmdirSync(apiDir, { recursive: true, force: true });
}
fs.mkdirSync(apiDir);

postFiles.forEach(file => {
  const str = fs.readFileSync(`${postsDir}/${file}`, "utf8");
  const res = parser.parseSync(str);
  const html = converter.makeHtml(res.content);
  const {
    language,
    tags,
    date,
    series,
    template,
    title,
    thumb_img_path
  } = res.data;
  if (tags) {
    const data = {
      language,
      tags,
      date,
      series,
      template,
      title,
      thumb_img_path,
      content: html
    };
    tags.map(tag => {
      if (postsByTag[tag]) {
        postsByTag[tag].push(data);
      } else {
        postsByTag[tag] = [data];
      }
    });
  }
});

const tagKeys = Object.keys(postsByTag);

const mainIndexJson = {};

tagKeys.map(tag => {
  const tagDir = `${apiDir}/${tag}`;
  fs.mkdirSync(tagDir);
  const singleTagPosts = postsByTag[tag];
  singleTagPosts.map(
    (
      {
        language,
        tags,
        date,
        series,
        template,
        title,
        thumb_img_path,
        content
      },
      index
    ) => {
      const data = {
        language,
        tags,
        date,
        series,
        template,
        title,
        thumb_img_path,
        contentDir: `${index}`
      };
      if (mainIndexJson[tag]) {
        mainIndexJson[tag].push(data);
      } else {
        mainIndexJson[tag] = [data];
      }
      const dataWithContent = { ...data, content };
      fs.writeFileSync(
        `${apiDir}/${tag}/${index}.json`,
        JSON.stringify(dataWithContent)
      );
    }
  );
});

fs.writeFileSync(`${apiDir}/tags.json`, JSON.stringify(mainIndexJson));
