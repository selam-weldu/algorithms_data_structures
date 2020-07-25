## RC ##
## APPROACH : TRIE + DFS ## (BFS/DFS both are same here)
## LOGIC ##
## 1. Build Trie with give Words ##
## 2. When there is character match next level will be only that characters children
## 3. when ch = ".", we take it as, it matched all the children in curr row, so we send next children of those row ##
## 4. When you are done with letters, check if it is end of word.

## TIME COMPLEXITY: addWord: O(len(word)), search: O(N) ## (where N is the number of nodes in the Trie up to depth len(word))
## SPACE COMPLEXITY : O(W) ##

class WordDictionary:
    def __init__(self):
        self.my_trie = Trie()
        
    def addWord(self, word: str) -> None:
        self.my_trie.insert(word)

    def search(self, word: str) -> bool:
        return self.my_trie.serachWithDot(word)
    
class TrieNode:
    def __init__(self):
        self.children = {}
        self.endOfWord = False
        
class Trie:
    def __init__(self):
        self.rootNode = TrieNode()
        
    # Inserts a word into the trie.
    def insert(self, word: str) -> None:
        currNode = self.rootNode
        for idx, ch in enumerate(word):                     
            if( ch not in currNode.children ):
                currNode.children[ch] = TrieNode()          
            currNode = currNode.children[ch]        # currnode.children[ch]
        currNode.endOfWord = True
    
	# Leetcode: 208, Implement Trie or Prefix Tree
    # Returns if the word is in the trie.
    def search(self, word: str) -> bool:
        currNode = self.rootNode                    
        for ch in word:
            if(ch not in currNode.children):
                return False
            currNode = currNode.children[ch]
        return currNode.endOfWord
    
	# Leetcode: 648 Replace Words
    # Returns if there is any word in the trie that starts with the given prefix.
    def startsWith(self, prefix: str) -> bool:
        currNode = self.rootNode                            
        for ch in prefix:
            if(ch not in currNode.children):
                return False
            currNode = currNode.children[ch]
        return True
    
	# Leetcode 211, Search words including "." (matches any character)
    # Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
    def serachWithDot(self, word: str) -> bool:
            def dfs(currNode, word):
                if not word:
                    return currNode.endOfWord
                ch = word[0]
                if ch == ".":
                    for node in [currNode.children[_] for _ in currNode.children]:
                        if dfs(node, word[1:]):
                            return True
                else:
                    if ch in currNode.children:
                        if dfs(currNode.children[ch], word[1:]):
                            return True
                    else:
                        return False
            return dfs(self.rootNode, word)