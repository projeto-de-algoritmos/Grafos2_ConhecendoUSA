const {cities} = require('./database/states');
const zipcodes = require('zipcodes');

function getNodeDistance(node1,node2) {
  var dist = zipcodes.distance(node1, node2);
  return zipcodes.toKilometers(dist);
}

function init() { 

  for(i = 0; i < cities.length; i++) {
    
    let dists = {}
    for(o = 0; o < cities[i].edges.length; o++){
      
      dists[cities[i].edges[o]] = getNodeDistance(cities[i].zipcode,cities[i].edges[o])
    }
    cities[i]['dist'] = dists
  }
}

function getNodeInformation(nodeZipcode) {
  let nodePosition = cities.findIndex(p => p.zipcode == nodeZipcode);
  return cities[nodePosition];
}

let shortestDistanceNode = (distances, visited) => {
  // create a default value for shortest
	let shortest = null;
	
  	// for each node in the distances object
	for (let node in distances) {
    	// if no node has been assigned to shortest yet
  		// or if the current node's distance is smaller than the current shortest
		let currentIsShortest =
			shortest === null || distances[node] < distances[shortest];
        	
	  	// and if the current node is in the unvisited set
		if (currentIsShortest && !visited.includes(node)) {
            // update shortest to be the current node
			shortest = node;
		}
	}
	return shortest;
};

function findShortestPath(startNode, endNode) {
  init();

  let distances = {};
  // distances[endNode] = "Infinity";
  let startPosition = cities.findIndex(p => p.zipcode == startNode);
  distances = Object.assign(distances, cities[startPosition]).dist;
  distances[endNode] = "Infinity";
  // console.log(distances);

  let parents = {}
  parents[endNode] = null;
  for (i = 0; i < cities[startPosition].edges.length; i++){
    child = cities[startPosition].edges[i]
    // console.log(cities[startPosition].edges);
    parents[child] = cities[startPosition].zipcode;
  }

  visited = [];
  let node = shortestDistanceNode(distances, visited);
  // console.log(node);

  while(node){
    let distance = distances[node];
    nodePos = cities.findIndex(p => p.zipcode == node)
    let childrenZipcodes = cities[nodePos].edges
    let childrenDist = [];
    for(let i = 0; i < childrenZipcodes.length; i++){
      childrenDist[i] = cities[nodePos].dist[childrenZipcodes[i]]
    }
    
    for (childPos in childrenZipcodes){
      // console.log(childPos);
      zip = childrenZipcodes[childPos];
      // console.log(childrenZipcodes);

      if(zip === startNode){
        continue;
      }else{
        let newdistance = distance + childrenDist[childPos];
        // console.log(childrenDist[childPos]);

        if(!distances[zip] || newdistance < distances[childrenZipcodes[childPos]]) {
          distances[childrenZipcodes[childPos]] = newdistance;
          // console.log(childPos);
          // console.log(childrenZipcodes[childPos]);
          // console.log(childrenDist[childPos]);
          // console.log(newdistance);
          parents[zip] = node;
        }
      }
    }

    visited.push(node);
    node = shortestDistanceNode(distances,visited);
    // console.log(node);

  }
  // console.log(distances);
  // console.log(getNodeDistance('98501','97301'))
  let shortestPath = [endNode];
  let parent = parents[endNode];
  let shortestPathNodes = [];
  nodeInfo = zipcodes.lookup(endNode);

  aux = {'distFromParent': null}
  aux.distFromParent = distances[endNode] - getNodeDistance(parents[endNode],startNode);
  // console.log(dist);

  nodeInfo = Object.assign(nodeInfo,aux);
  // console.log(nodeInfo);
  shortestPathNodes.push(nodeInfo); 
  // console.log(distances);
  // console.log(parents);
  // console.log(shortestPath);
  // console.log(shortestPathNodes);
  // console.log(parents[endNode]);

  while(parent) {
    shortestPath.push(parent);
    nodeInfo = zipcodes.lookup(parent);
    shortestPathNodes.push(nodeInfo);

    aux = {'distFromParent': null}
    aux.distFromParent = distances[parent] - getNodeDistance(parents[parent],startNode);

    nodeInfo = Object.assign(nodeInfo,aux);

    parent = parents[parent];
  }
  shortestPath.reverse();
  shortestPathNodes.reverse();

  result = {
    totalDistance: distances[endNode],
    path: shortestPath,
    nodesInfo: shortestPathNodes
  }

  return result;
  // console.log(distances[endNode]);
  // console.log(shortestPath);

  // console.log(getNodeDistance(98501,83701))
  // console.log(getNodeDistance(83701,84101))
  // console.log(getNodeDistance(84101,80201))


}

module.exports = {
  findShortestPath
}

// var testOrigin = cities.findIndex(p => p.zipcode == "98501");
// var testDest = cities.findIndex(p => p.zipcode == "87501");
// init();
// console.log(cities[0].dist['30301']);
// out = findShortestPath('98501', '87501');
// console.log(out);