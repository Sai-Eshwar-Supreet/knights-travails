import { Vector2 } from "../utils/vector2.js";
import { ChessGrid } from "./chess-grid.js";

const pathFinder = (
    function(){
        function findPath(gridSize, piece, start, target){
            const grid = new ChessGrid(gridSize);
            const openNodes = [];
        
            openNodes.push(grid.getNodeAt(start));
            
            while(openNodes.length !== 0){
                let selectedNodeIndex = 0;
                let currentNode = openNodes[selectedNodeIndex];


                for(let i = 1; i < openNodes.length; i++){
                    let node = openNodes[i];
                    if(node.fCost < currentNode.fCost || (node.fCost === currentNode.fCost && node.hCost < currentNode.hCost)){
                        currentNode = node;
                        selectedNodeIndex = i;
                    }
                }

                openNodes.splice(selectedNodeIndex, 1);
                currentNode.isVisited = true;
        
                if(currentNode.position.toEqual(target)){
                    return calculatePath(currentNode);
                }
        
                const neighbors = grid.getValidMoveNodes(piece, currentNode.position);
        
                for(let neighbor of neighbors){
                    if(neighbor.isVisited) continue;

                    let possibleGCost = currentNode.gCost + Vector2.getDistance(currentNode.position, neighbor.position);

                    if(!openNodes.includes(neighbor) || possibleGCost < neighbor.gCost){
                        neighbor.gCost = possibleGCost;
                        neighbor.hCost = Vector2.getDistance(neighbor.position, target);
                        neighbor.fromNode = currentNode;
                        openNodes.push(neighbor);
                    }

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

export { pathFinder }