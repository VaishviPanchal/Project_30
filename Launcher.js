class Launcher{
    constructor(bodyA,pointB) {
        var options={
            bodyA : bodyA,
            pointB : pointB,
            length : 10,
            stiffness : 0.1
        }
        this.body=Constraint.create(options)
        //console.log(this.body)
        //console.log("Launcher reated")
        World.add(world,this.body)
    }

    display(){
        if (this.body.bodyA){
            var bodyA = this.body.bodyA.position;
            var pointB = this.body.pointB;
            //console.log(this.body.bodyA.position.x);
            push()
            stroke(49,22,8)
            strokeWeight(1.7)
            line(bodyA.x,bodyA.y,pointB.x,pointB.y)
            
        }
    }
    fly(){
        this.body.bodyA=null;
    }
    attach(body){
		this.body.bodyA=body
	}
}
