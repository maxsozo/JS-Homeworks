{
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
        if (typeof obj === 'string') {
            return obj;
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
}

{
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

    function domTree(parent, obj) {
        if (typeof obj === 'string') {
            const textObj = document.createTextNode(obj);
            parent.appendChild(textObj);
        } else {
            const { tagName, attrs, children } = obj;
            const element = document.createElement(tagName);
            
            if (attrs) {
                for (const [key, value] of Object.entries(attrs)) {
                    element.setAttribute(key, value);
                }
            }
            
            parent.appendChild(element);
            
            if (children) {
                for (const child of children) {
                    domTree(element, child);
                }
            }
        }
    }
    

    domTree(document.body, table)
}

{
    function deepCopy(obj) {
        if (typeof obj !== 'object' || obj === null) {
            return obj;
        }
    
        let copy = Array.isArray(obj) ? [] : {};
        
        for (const key in obj) {
            copy[key] = deepCopy(obj[key]);
        }
        
        return copy;
    }

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

    const arr  = [1,"string", null, undefined, {a: 15, b: 10, c: [1,2,3,4],d: undefined, e: true }, true, false]
    const arr2 = deepCopy(arr) //arr2 та всі його вкладені масиви та об'єкти - інші об'єкти, які можна змінювати без ризику поміняти щось у arr
    console.log(arr2);
    const table2 = deepCopy(table) // Аналогічно
    console.log(table2);
}