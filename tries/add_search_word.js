// search(word) can search a literal word or a regular expression string containing 
// only letters a - z or..A.means it can represent any one letter.

// Example
// addWord("bad")
// addWord("dad")
// addWord("mad")
// search("pad") -> false
// search("bad") -> true
// search(".ad") -> true
// search("b..") -> true

class TrieNode {
    constructor(key) {
        this.key = key;
        this.children = {};
        this.end = false;
        this.parent = null
    }

    getWord() {
        let node = this,
            output = [];

        while (node.parent) {
            output.unshift(node.key)
            node = node.parent
        }

        return output.join('')
    }
}

class wordDictionary {
    constructor() {
        this.root = new TrieNode(null);
    }

    addWord(str) {
        let node = this.root;

        for (let i = 0; i < str.length; i++) {
            if (!node.children[str[i]]) {
                node.children[str[i]] = new TrieNode(str[i]);
                node.children[str[i]].parent = node;
            }
            node = node.children[str[i]];
        }

        node.end = true;
        return this;
    }

    contains(str) {
        let node = this.root;

        for (let i = 0; i < str.length; i++) {
            if (!node.children[str[i]]) return false;

            node = node.children[str[i]];
        }
        return node.end;
    }


    find(prefix) {
        let node = this.root,
            output = [];

        for (let i = 0; i < prefix.length; i++) {
            if (!node.children[prefix[i]]) return output

            node = node.children[prefix[i]];
        }

        this.findAllWords(node, output);

        return output;
    }

    findAllWords(node, arr) {
        if (node.end) {
            arr.push(node.getWord());
        }

        for (let child in node.children) {
            this.findAllWords(node.children[child], arr);
        }
    }

    search(word){
        return this.searchHelper(word, 0,this.root);
    }

    searchHelper(word,idx,node){
        if(idx === word.length){
            return node.end;
        }

        let char = word[idx];
        if(node.children[char]){
            return this.searchHelper(word, idx+1,node.children[char])
        } else if(char === "."){
            for(let letter in node.children){
                if(this.searchHelper(word, idx+1,node.children[letter])){
                    return true;
                }
            }
        }
        return false;
    }

}
