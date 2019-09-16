class TrieNode {
    constructor(key) {
        this.key = key;
        this.children = {};
        this.end = false;
        this.data = null;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(str) {
        let node = this.root;

        for (let i = 0; i < str.length; i++) {
            if (!node.children[str[i]]) {
                node.children[str[i]] = new TrieNode(str[i]);
                node.children[str[i]].parent = node;
            }
            node = node.children[str[i]];
            node.counter++;
        }

        node.end = true;
        node.data = str;
        return this;
    }
    
}


function spellingBeeSolutions(wordList, puzzles) {
    //init trie, add wordList
    let trie = new Trie();
    wordList.forEach(word => {
        trie.insert(word);
    })
    // setup globalcount
    let globalCount = [];
    //for each puzzle dfs the trie
    puzzles.forEach(puzzle => {
        dfs(puzzle, trie, globalCount)
    })
    
    //return globalcoutn
    return globalCount;
}

function dfs(puzzle, trie, globalCount) {
    // add puzzle chars into map
    let map = {}
    // set up keyChar = puzzle[0]

    for (let i = 0; i < puzzle.length; i++) {
        map[puzzle[i]] = true;
    }
    let keyChar = puzzle[0]
    // localCount variable
    let localCount = 0;
    //dfs trie using stack 
    let stack = [trie.root]

    while(stack.length){
        let node = stack.pop();

        // if (node.children === {}) return;

        Object.keys(node.children).forEach(child => {
            if (map[child]){
                //add node not key
                stack.push(node.children[child])
            }
        })

    //if a valid word can be spelled using the puzzle(node.end && node.getWord().includes(keyChar))
        if(node.end && node.data.includes(keyChar)){
        //increase local counter
            localCount += 1
        }
    }
    //push localCounter into globalCount
    globalCount.push(localCount);
}



let words =  ["ap","apple", "pleas", "please", "cat", "app"];
let puzzles = ["aelwxyz", "aelpxyz", "aelpsxy", "saelpxy", "xaelpsy"];

console.log(spellingBeeSolutions(words, puzzles))