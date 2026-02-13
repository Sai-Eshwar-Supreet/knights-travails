import { ChessGrid } from "./chess-grid.js";
import { Node } from "./node.js";

const bfsPathFinder = (
    function(){
        function createNode(position){
            return new Node(position)
        }

        function findPath(gridSize, piece, start, target){
            const grid = new ChessGrid(gridSize, createNode);
            const openNodes = [];
        
            openNodes.push(grid.getNodeAt(start));
            
            let selectedNodeIndex = 0;
            while(selectedNodeIndex < openNodes.length){
                let currentNode = openNodes[selectedNodeIndex];
                selectedNodeIndex++;
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

export { bfsPathFinder }