class TrieNode {
    constructor(key) {
        this.key = key;
        this.children = {};
        this.end = false;
        this.parent = null
        this.counter = 0
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(str, arr) {
        let node = this.root;
        let output = arr

        for (let i = 0; i < str.length; i++) {
            if(node.end && i !== str.length - 1){
                output.push(`BAD SET ${str}`)
            }

            if (!node.children[str[i]]) {
                node.children[str[i]] = new TrieNode(str[i]);
                node.children[str[i]].parent = node;
            }
            node = node.children[str[i]];
            node.counter++;
        }

        node.end = true;
    }

    contains(str) {
        let node = this.root;

        for (let i = 0; i < str.length; i++) {
            if (!node.children[str[i]]) return false;

            node = node.children[str[i]];
        }
        return node.end;
    }




}

function processData() {
    let trie = new Trie();
    let output = []

    trie.insert('aab', output)
    trie.insert('defgab', output)
    trie.insert('abcde', output)
    trie.insert('aabcde', output)
    trie.insert('cedaaa', output)
    trie.insert('bbbbbbbbbb', output)
    trie.insert('jabjjjad', output)

    console.log(output[0]);
}

processData();