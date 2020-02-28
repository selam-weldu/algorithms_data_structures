# it's →Timsort, which identifies the two already sorted 
# runs as such and simply merges them. And since it's done 
# in C, it's likely faster than if I tried merging myself in Python.


class Solution:
    def getAllElements(self, root1, root2):
        arr_1 = self.traverse(root1, [])
        arr_2 = self.traverse(root2, [])

        if not arr_2:
            return arr_1
        if not arr_1:
            return arr_2
        return sorted(arr_1 + arr_2)

    def traverse(self, node, array):
        if not node:
            return
        self.traverse(node.left, array)
        array.append(node.val)
        self.traverse(node.right, array)
        return array


class Solution:
    def getAllElements(self, root1, root2):
        arr_1 = self.traverse(root1, [])
        arr_2 = self.traverse(root2, [])

        if not arr_1:
            return arr_2
        if not arr_2:
            return arr_1
        if not arr_1 and not arr_2:
            return []

        i, j = 0, 0
        n1, n2 = len(arr_1), len(arr_2)
        res = []
        while i < n1 or j < n2:
            if i == n1:
                res.extend(arr_2[j:])
                return res
            if j == n2:
                res.extend(arr_1[i:])
                return res
            if arr_1[i] > arr_2[j]:
                res.append(arr_2[j])
                j += 1
            else:
                res.append(arr_1[i])
                i += 1
        return res

    def traverse(self, node, array):
        if not node:
            return
        self.traverse(node.left, array)
        array.append(node.val)
        self.traverse(node.right, array)
        return array
