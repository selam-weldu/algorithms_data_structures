class TrieNode{
    constructor(key){
        this.key = key;
        this.children = {};
        this.end = false;
        this.parent = null
    }

    get_word(){
        let node = this;
        let output = []

        while(node.parent){
            output.unshift(node.key)
            node = node.parent
        }

        return output.join('')
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode(null);
    }

    insert(str){
        let node = this.root;

        for (let i = 0; i < str.length; i++) {
            if(!node.children[str[i]]){
                node.children[str[i]] = new TrieNode(str[i])
                node.children[str[i]].parent = node
            }
            node = node.children[str[i]]
        }

        node.end = true
    }

    contains(str){
        let node = this.root;

        for (let i = 0; i < str.length; i++) {
            if(!node.children[str[i]]) return false

            node = node.children[str[i]]
        }
        return node.end
    }

   
    find(prefix){
        let node = this.root;
        let output = [];

        for (let i = 0; i < prefix.length; i++) {
            if(!node.children[prefix[i]]) return output

            node = node.children[prefix[i]]
        }

        this.findAllWords(node, output);

        return output
    }

    findAllWords(node, arr) {
        if (node.end) {
            arr.push(node.get_word())
        }

        for (let child in node.children) {
            this.findAllWords(node.children[child], arr)
        }
    }

}

// -----------------------------------------

// instantiate our trie
let trie = new Trie();

// insert few values
trie.insert("hello");
trie.insert("helium");

// check contains method
console.log(trie.contains("helium"));  // true
console.log(trie.contains("kickass")); // false

// check find method
console.log(trie.find("hel"));  // [ 'helium', 'hello' ]
console.log(trie.find("hell")); // [ 'hello' ]