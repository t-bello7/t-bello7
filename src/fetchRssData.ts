import Parser from "rss-parser";

const parser = new Parser();

export const fetchRssData = async (url: string): Promise<string> => {
    const feed = await parser.parseURL(url);

    const list = feed.items.slice(0, 5).map(item => {
        const date = new Date(item.pubDate as string);

        const publishedData = `${date.getDate()}/${date.getMonth() + 1 } /${date.getFullYear()}`
        return `<li><a href=${item.link} target="_blank" rel="noopener noreferrer">${item.title}</a> (${publishedData}).</li>`;
    });
    return `<ul>${list.join("")}</ul>\n`;
}