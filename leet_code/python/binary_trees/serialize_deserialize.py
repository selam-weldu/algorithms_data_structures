class Codec:

    def serialize(self, root):
        array = []
        self.serializeHelper(root, array)
        return " ".join(str(p) for p in array)

    def serializeHelper(self, node, array):
        if not node:
            array.append('None')
            return

        array.append(node.val)
        self.serializeHelper(node.left, array)
        self.serializeHelper(node.right, array)

    def deserialize(self, data):
        data = data.split()[::-1]
        return self.deserializeHelper(data)

    def deserializeHelper(self, data):
        if not data:
            return

        val = data.pop()
        if val == 'None':
            return None

        node = TreeNode(int(val))
        node.left = self.deserializeHelper(data)
        node.right = self.deserializeHelper(data)

        return node
