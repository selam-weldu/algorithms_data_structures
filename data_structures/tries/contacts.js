// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(str => str.trim());

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

//// Ignore Above code //////
class TrieNode {
    constructor(key) {
        this.key = key;
        this.parent = null;
        this.children = {};
        this.end = false;
        this.count = 0;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(str) {
        let current = this.root;
        for (let i = 0; i < str.length; i++) {
            if (!current.children[str[i]]) {
                current.children[str[i]] = new TrieNode(str[i])
                current.children[str[i]].parent = current;
            }
            current = current.children[str[i]];
            // track num of string that include current node key
            current.count += 1;
        }
        current.end = true
    }

    find(prefix) {
        let current = this.root;
        for (let i = 0; i < prefix.length; i++) {
            if (!current.children[prefix[i]]) {
                return 0;
            }
            current = current.children[prefix[i]]
        }
        return current.count
    }
}
/*
 * Complete the contacts function below.
 */
function contacts(queries) {
    /*
     * Write your code here.
     */
    let trie = new Trie(), output = [];
    for (let i = 0; i < queries.length; i++) {
        if (queries[i][0] === 'add') {
            trie.insert(queries[i][1])
        } else if (queries[i][0] === 'find') {
            output.push(trie.find(queries[i][1]))
        }
    }

    return output;

}

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const queriesRows = parseInt(readLine(), 10);

//     let queries = Array(queriesRows);

//     for (let queriesRowItr = 0; queriesRowItr < queriesRows; queriesRowItr++) {
//         queries[queriesRowItr] = readLine().split(' ');
//     }

//     let result = contacts(queries);

//     ws.write(result.join("\n") + "\n");

//     ws.end();
// }

