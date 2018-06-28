// function myCanvas(){
// 	var b = document.getElementById('canvas'),
// 		c = b.getContext("2d");
//
// 	var width=b.width=window.innerWidth,
// 		height=b.height=window.innerHeight,
// 		snowheight=0;
// 	var arr=[];
// 	var num=1000,min=1;
// 	snowSet();
//
// 	function snowSet(){
// 		for(var i=0;i<num;i++){
//
// 			x=Math.random()*width;
// 			y=Math.random()*height;
// 			t=Math.random()*.80;
// 			size=Math.random()*8;
// 			speed=Math.pow(size,2)*.1;
// 			alpha=Math.random()*1;
// 			color="snow";
//
// 			if(speed<min)
// 				speed=min;
//
// 			arr.push({x:x , y:y , t:t , size:size , speed:speed , alpha:alpha , color:color });
// 		}
// 		go();
// 	}
//
// 	function go(){
// 		requestAnimationFrame(go);
// 		c.clearRect(0,0,width,height-snowheight);
//
// 		for(var i=0;i<num;i++){
// 			a=arr[i];
//
// 			a.y+=a.speed;
// 			a.x+=a.t*(a.size*.2);
//
// 			if(a.y>height||a.x>width){
// 				snowStack(a);
// 				a.y = -10 - Math.random()*50;
// 				a.x = (Math.random()*width)-10;
// 			}
//
// 				c.beginPath();
// 				c.arc(a.x, a.y, a.size, 0, Math.PI * 2);
// 				c.fillStyle=a.color;
// 				c.globalAlpha=a.alpha;
// 				c.fill();
// 		}
// 	}
// 	function snowStack(a){
// 		snowheight+=a.size/1000;
// 		c.fillStyle=a.color;
// 		c.fillRect(a.x, height-snowheight, a.size,a.size);
// 	}
// }
// myCanvas();
class snow{
	constructor(){
		this.canvas = document.getElementById('canvas'),
		this.c = this.canvas.getContext("2d");

		this.width=canvas.width=window.innerWidth;
		this.height=canvas.height=window.innerHeight;


		this.color="snow";
		this.arr=[];
		this.num=1000
		this.min=1;
		this.snowSet();
	}
	snowSet(){
		for(var i=0;i<this.num;i++){
			const x=Math.random()*this.width;
			const y=Math.random()*this.height;
			const t=Math.random()*.80;
			const size=Math.random()*8;
			let speed=Math.pow(size,2)*.1;
			const alpha=Math.random()*1;

			if(speed<this.min)
				speed=this.min;

			this.arr.push({x:x , y:y , t:t , size:size , speed:speed , alpha:alpha });
		}
	}
}
class app extends snow{
	constructor(){
		super();
		this.go=this.go.bind(this);
		this.snowheight=0;
		this.go();

	}
	go(){
		requestAnimationFrame(this.go);
		this.c.clearRect(0,0,this.width,this.height-this.snowheight);

		for(var i=0;i<this.num;i++){

			this.arr[i].y+=this.arr[i].speed;
			this.arr[i].x+=this.arr[i].t*(this.arr[i].size*.2);

			if(this.arr[i].y>this.height||this.arr[i].x>this.width){
				this.snowStack(this.arr[i]);
				this.arr[i].y = -10 - Math.random()*50;
				this.arr[i].x = (Math.random()*this.width)-10;
			}

				this.c.beginPath();
				this.c.arc(this.arr[i].x, this.arr[i].y, this.arr[i].size, 0, Math.PI * 2);
				this.c.fillStyle=this.color;
				this.c.globalAlpha=this.arr[i].alpha;
				this.c.fill();
		}
	}
	snowStack(a){
		this.snowheight+=a.size/1000;
		this.c.fillStyle=this.color;
		this.c.fillRect(a.x, this.height-this.snowheight, a.size,a.size);
	}
}
new app();
