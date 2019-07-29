// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/



function buildGraph(arr){
    let graph = {}

    arr.forEach(pair => {
       graph[pair[0]] = [pair[1]]
    })

    return graph
}

function canFinish(numCourses, prerequisites) {
    if(prerequisites.length === 0){
        return true
    } else if (numCourses < (prerequisites.length * 2)){
        return false
    }
   
    

    return true
}
