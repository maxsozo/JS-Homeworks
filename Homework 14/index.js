const table = {
    tagName: 'table',
    attrs: {
        border: "1",
    },
    children: [
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["1x1"],
                },
                {
                    tagName: "td",
                    children: ["1x2"],
                },
            ]
        },
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["2x1"],
                },
                {
                    tagName: "td",
                    children: ["2x2"],
                },
            ]
        }
    ]
}

function htmlTree(obj) {
    if (typeof node === 'string') {
        return node;
    }

    const { tagName, attrs, children } = obj;
    let str = `<${tagName}`;
    
    if (attrs) {
        for (const [key, value] of Object.entries(attrs)) {
            str += ` ${key}='${value}'`;
        }
    }

    str += '>';

    if (children) {
        for (const child of children) {
            str += htmlTree(child);
        }
    }

    str += `</${tagName}>`;
    return str;
}

const htmlString = htmlTree(table);
document.write(htmlString);