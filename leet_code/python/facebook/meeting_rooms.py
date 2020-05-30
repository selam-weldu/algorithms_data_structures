# O(n) time | O(n) space
def canAttendMeetings(self, intervals: List[List[int]]) -> bool:
    start = intervals[:]
    end = intervals[:]
    for i in range(len(intervals)):
        start[i] = intervals[i][0]
        end[i] = intervals[i][1]

    start.sort()
    end.sort()

    for i in range(len(start)-1):
        if start[i + 1] < end[i]:
            return False
    return True
