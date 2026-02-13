import { ChessGrid } from "./chess-grid.js";
import { Node } from "./node.js";

const dfsPathFinder = (
    function(){
        function createNode(position){
            return new Node(position)
        }

        function findPath(gridSize, piece, start, target){
            const grid = new ChessGrid(gridSize, createNode);
            const openNodes = [];
        
            openNodes.push(grid.getNodeAt(start));
            while(openNodes.length !== 0){
                let currentNode = openNodes.pop();
                currentNode.isVisited = true;
        
                if(currentNode.position.toEqual(target)){
                    return calculatePath(currentNode);
                }
        
                const neighbors = grid.getValidMoveNodes(piece, currentNode.position);
        
                for(let neighbor of neighbors){
                    if(neighbor.isVisited || openNodes.includes(neighbor)) continue;
                    neighbor.fromNode = currentNode;
                    openNodes.push(neighbor);
                }
            }
        
            return undefined;
        
        }
        
        function calculatePath(node){
            let arr = [];
        
            while(node !== null){
                arr.push(node.position);
                node = node.fromNode;
            }
        
            return arr.reverse();
        }

        return { findPath }
    }
)();

export { dfsPathFinder }