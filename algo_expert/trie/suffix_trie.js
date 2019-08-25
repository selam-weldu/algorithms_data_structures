class TrieNode{
    constructor(key){
        this.key = key;
        this.children = {};
        this.parent = null;
        this.end = false
    }
}

class SuffixTrie{
    constructor(){
        this.root = new TrieNode(null);
    }

    populateSuffixTrieFrom(str){
        for (let i = 0; i < str.length; i++) {
          this.insert(str.slice(i))  
        }
    }

    insert(str){
        let current = this.root;
        for (let i = 0; i < str.length; i++) {
            if(!current.children[str[i]]){
                current.children[str[i]] = new TrieNode(str[i])
                current.children[str[i]].parent = current
            }

            current = current.children[str[i]]
        }
        current.end = true
    }

    contains(str){
        let current = this.root;

        for (let i = 0; i < str.length; i++) {
            if(!current.children[str[i]]) return false
            current = current.children[str[i]]
        }

        return current.end
    }
    

}

