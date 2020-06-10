# build graph req -> dep
# build no_dep array
# remove edges
# check if numCourses == ordered_courses
# O(v+e) time and space
from collections import defaultdict
class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        graph = defaultdict(list)
        in_degree = defaultdict(int)
        ordered_courses = []

        for pair in prerequisites:
            dep, req = pair[0], pair[1]
            graph[req].append(dep)
            in_degree[dep] += 1

        no_dep_array = [k for k in range(numCourses) if k not in in_degree]

        while len(no_dep_array):
            current = no_dep_array.pop()
            ordered_courses.append(current)

            for next in graph[current]:
                in_degree[next] -= 1
                if in_degree[next] == 0:
                    no_dep_array.append(next)

        if len(ordered_courses) == numCourses:
            return ordered_courses
        else:
            return []
