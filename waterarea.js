function waterArea(heights) {
  // Write your code here.
	const maxpilar = new Array(heights.length).fill(0);
	let leftMax = 0;
	for (let i = 0 ; i < heights.length; i++){
		const height = heights[i];
		maxpilar[i] = leftMax;
		leftMax = Math.max(height, leftMax);
	}
	let rightMax = 0;
	for( let i=heights.length-1; i >=0 ; i--){
		const height = heights[i];
		const minheight = Math.min(rightMax, maxpilar[i])
		if(minheight > height){
			maxpilar[i] = minheight - height;
		} else{
			maxpilar[i] = 0;
			
		}
		rightMax = Math.max(rightMax, height);
	}
	return maxpilar.reduce((a,b)=> a+b, 0);
	
}

// Do not edit the line below.
exports.waterArea = waterArea;
