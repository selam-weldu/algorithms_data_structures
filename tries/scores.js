class TrieNode {
    constructor(key) {
        this.key = key;
        this.children = {};
        this.score = 0;
        this.end = false;
    }
}

class Trie {
    constructor(documentTitles, documentBodies) {
        this.root = new TrieNode(null);
        this.add(documentTitles, documentBodies);
    }

    add(titles, bodies) {
        for (let i = 0; i < titles.length; i++) {
            this.insert(titles[i], 10)
        }

        for (let i = 0; i < bodies.length; i++) {
            this.insert(bodies[i], 1)
        }
    }


    insert(word, rank) {
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            if (!current.children[word[i]]) {
                current.children[word[i]] = new TrieNode(word[i])
            }
            current = current.children[word[i]];
        }

        current.end = true;
        current.score += rank;
    }

    find(word) {
        let output = []
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            if(!current.children[word[i]]){
                return 0
            }
            current = current.children[word[i]]
                
            }

        this.findAllWords(current, output)

        return Math.max(...output);
    }


    findAllWords(node, arr) {

        if (node.end) {
            arr.push(node.score);
        }

        for (let child in node.children) {
            this.findAllWords(node.children[child], arr)
        }

    }
}

function getAutocompleteScores(documentTitles, documentBodies, queries) {
    let output = []

    let trie = new Trie(documentTitles, documentBodies);

    queries.forEach(query => {
        output.push(trie.find(query));
    })

    console.log(output);
}

///////////////////////////////

let titles = ["AAA", "BBB", "AA", "CDD", "CDD"];
let bodies = ["AAA", "CCD", "CCC", "DDD"]


getAutocompleteScores(titles,bodies,["A", "C", "CC", "X", "BB"]);
// [ 11, 20, 1, 0, 10 ]