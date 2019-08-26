// Design a search autocomplete system for a search engine.Users may input a 
// sentence(at least one word and end with a special character '#').For each 
// character they type except '#', you need to return the top 3 historical hot 
// sentences that have prefix the same as the part of sentence already typed.

class TrieNode {
    constructor(key) {
        this.key = key;
        this.children = {};
        this.end = false;
        this.data = null;
        this.rank = 0;
    }
}

class AutocompleteSystem{
    constructor(sentences, times){
        this.root = new TrieNode(null);
        this.keyword = ""

        for (let i = 0; i < sentences.length; i++) {
            this.addRecord(sentences[i], times[i])
        }
    }

    addRecord(sentence, hot){
        let p = this.root;

        for (let i = 0; i < sentence.length; i++) {
            let c = sentence[i];
            if (!p.children[c]) {
                p.children[c] = new TrieNode(c)
            }
            p = p.children[c];
        }
            p.end = true;
            p.data = sentence;
            p.rank += hot;

        return this;
    }

    dfs(root,ret){
        

        if(root){
            if(root.end){
                ret.push({rank: root.rank, data: root.data})
            }

            for (let child in root.children) {
                this.dfs(root.children[child], ret)
            }
        }

    }

    search(sentence){
        let p = this.root;
        let output = []

        for (let i = 0; i < sentence.length; i++) {
            let c = sentence[i];
            if(!p.children[c]){
                return []
            }
            p = p.children[c]
        }

        this.dfs(p,output)
        return output
    }

    input(c){
        let results = [];

        if(c != "#"){
            this.keyword += c;
            results = this.search(this.keyword)
        } else{
            this.addRecord(this.keyword, 1)
            this.keyword = ""
        }

        // testing
        // return results;
        results.sort((a, b) => {
            if (a.rank === b.rank) {
                return a.data < b.data ? -1 : 1;
            }
            if (a.rank > b.rank) {
                return -1;
            }
            return 1;
        })
        if (results.length > 3) {
            results = results.slice(0, 3);
        }
        return results.map(result => result.data);
    }
}


////// testing /////
let sentences = ["i love you", "island", "iroman", "i love leetcode"];
let times = [5, 3, 2, 2]

let auto = new AutocompleteSystem(sentences, times);
console.log(auto.input(["i"]))
console.log(auto.input([" "]))
console.log(auto.input(["a"]))
console.log(auto.input(["#"]))