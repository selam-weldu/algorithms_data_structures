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

class AutocompleteSystem {
    constructor(sentences, times) {
        this.root = new TrieNode(null);
        //search input needs to persist
        this.keyword = "";
        this.insert(sentences, times);
    }

    insert(sentences, times){
        for (let i = 0; i < sentences.length; i++) {
            this.add(sentences[i], times[i])
        }
    }

    add(sentence, hot) {
        let current = this.root;

        for (let i = 0; i < sentence.length; i++) {
            if (!current.children[sentence[i]]) {
                current.children[sentence[i]] = new TrieNode(sentence[i])
            }
            current = current.children[sentence[i]];
        }
        current.end = true;
        current.data = sentence;
        current.rank += hot;

        return this;
    }


    search(sentence) {
        let current = this.root;
        let output = [];

        for (let i = 0; i < sentence.length; i++) {
            if (!current.children[sentence[i]]) {
                return [];
            }
            current = current.children[sentence[i]];
        }

        this.findAllWords(current, output);

        return output;
    }

    findAllWords(node, arr) {
        if (node.end) {
            // store both rank and data
            //rank needed for sorting and data for output
            arr.push({ rank: node.rank, data: node.data })
        }

        for (let child in node.children) {
            this.findAllWords(node.children[child], arr)
        }
    }


    input(c) {
        let results = [];
     
        if (c != "#") {
            // add c to keyword, because it needs to persist
            this.keyword += c;
            results = this.search(this.keyword)
        } else {
            // this.keyword includes all chars typed in execpt #
            this.add(this.keyword, 1)
            // clear keyword, because sentence has been added and all inputs are now new
            this.keyword = "";
        }


        results.sort((a, b) => {
            if (a.rank > b.rank) {
                return -1;
            } else if(a.rank < b.rank) {
                return 1;
            } else {
                return a.data < b.data ? -1 : 1;
            }
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