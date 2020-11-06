class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 1,
            length: 10
        }
        this.pointB=pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    released(){
        this.chain.bodyA = null;

    }

    attach(body){
		this.chain.bodyA=body;
	}

    display(){
        if(this.chain.bodyA){
         var pointA = this.chain.bodyA.position;
         var pointB = this.pointB;
         strokeWeight(4);
         line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
        
        
    }
    
}