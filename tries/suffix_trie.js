class SuffixTrie {
    constructor(string) {
        this.root = {};
        this.endSymbol = "*";
        this.populateSuffixTrieFrom(string);
    }

    populateSuffixTrieFrom(string) {
        for (let i = 0; i < string.length; i++) {
            this.insert(string.slice(i))
        }
    }

    insert(string) {
        let node = this.root

        for (let i = 0; i < string.length; i++) {
            if (!node[string[i]]) {
                node[string[i]] = {}
            }
            node = node[string[i]]
        }
        node[this.endSymbol] = true
    }

    contains(string) {
        let node = this.root

        for (let i = 0; i < string.length; i++) {
            if (!node[string[i]]) return false

            node = node[string[i]]
        }

        return node[this.endSymbol]
    }
}
