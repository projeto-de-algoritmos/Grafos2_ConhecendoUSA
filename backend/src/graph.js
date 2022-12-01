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
  let distances = {}
  distances[endNode] = "Infinity";
  distances = Object.assign(distances, cities[startNode]);

  let parents = {endNode: null};
  for (i = 0; i < cities[startNode].edges.length; i++){
    child = cities[startNode].edges[i]
    // console.log(cities[startNode].edges);
    parents[child] = cities[startNode].zipcode;
  }
  console.log(parents);
}

var testOrigin = cities.findIndex(p => p.zipcode == "98501");
var testDest = cities.findIndex(p => p.zipcode == "87501");
// origem = cities.indexOf(cities['zipcode'])
dijkstra(testOrigin, testDest)
// console.log(cities[0].indexOf(97301));
// console.log(cities.indexOf('state': 'AL'))
// console.log()