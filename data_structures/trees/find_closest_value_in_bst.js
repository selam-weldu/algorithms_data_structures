function findClosestValueInBst(tree, target) {
  
	let closest = Infinity;
	
	while(tree){
		 
		if(Math.abs(target - tree.value) < Math.abs(target - closest)){
			closest = tree.value;
		}
		
		if(tree.value === target){
			return tree.value;
		} else if(target < tree.value){
			tree = tree.left;
		} else {
			tree = tree.right;
		}
	}
	
	return closest;
}