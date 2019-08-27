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
