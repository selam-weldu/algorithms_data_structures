function multiStringSearch(bigString, smallStrings) {
    let output = []
    let trie = new Trie();
    trie.addStrings(bigString)

    smallStrings.forEach(str => {
        output.push(trie.contains(str))
    })

    return output;
}



class TrieNode {
    constructor(key) {
        this.key = key;
        this.parent = null;
        this.children = {};
        this.end = false;
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
                current.children[str[i]].parent = current
            }
            current = current.children[str[i]]
        }
        current.end = true
        return this;
    }

    addStrings(strings) {
        strings = strings.split(' ');
        strings.forEach(str => this.insert(str));
        return this;
    }

    contains(str) {
        let current = this.root;
        for (let i = 0; i < str.length; i++) {
            if (!current.children[str[i]]) {
                return false;
            }
            current = current.children[str[i]]
        }
        return true;
    }
}

// console.log(multiStringSearch("this is a big string", ["this", "yo", "is", "a", "bigger", "string", "kappa"]))