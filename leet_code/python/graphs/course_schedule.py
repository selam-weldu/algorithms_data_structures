# build graph, prereq -> courses, track indegree and totaldeps
# fill nodepcourses
# remove edges and add to nodepcourses if zero
# check if cycle

# O(v+e) time and space
from collections import defaultdict, deque
class GNode(object):
    def __init__(self):
        self.out_nodes = []
        self.in_degree = 0


class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:

        graph = defaultdict(GNode)
        total_deps = 0
        for courses in prerequisites:
            course, pre_req = courses[0], courses[1]
            graph[pre_req].out_nodes.append(course)
            graph[course].in_degree += 1
            total_deps += 1

        no_dep_courses = []
        for course, node in graph.items():
            if node.in_degree == 0:
                no_dep_courses.append(course)

        removed_edges = 0
        while len(no_dep_courses):
            current_course = no_dep_courses.pop()

            for next_course in graph[current_course].out_nodes:
                graph[next_course].in_degree -= 1
                removed_edges += 1

                if graph[next_course].in_degree == 0:
                    no_dep_courses.append(next_course)

        if removed_edges == total_deps:
            return True
        else:
            return False
