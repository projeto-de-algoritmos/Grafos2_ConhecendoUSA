const {cities} = require('./database/states') 

// search short distance between nodes
let shortestDistanceNode = (distances, visited) => {
  let shortest = null;

  for (let node in distances) {
    let currentIsShortest = shortest === null || distances[node] < distances[shortest];
    
    if (currentIsShortest && !visited.includes(node)) {
      shortest = node
    }
  }
  
  return shortest
}

// search shorth path in graph
function dijkstra(startNode, endNode){
  console.log(cities);
}