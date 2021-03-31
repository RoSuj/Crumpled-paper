class paperball
{
	constructor(x,y,radius)
	{
		this.radius=radius
		
        this.body=Bodies.circle(x,y,radius);
        World.add(world,this.body)

        this.image=loadImage("paper.png")
    }

    
    display()
{
translate(this.body.position.x,this.body.position.y);
rotate(this.angle);
imageMode(CENTER)
    image(this.image,0, 0,this.radius,this.radius)
}
}