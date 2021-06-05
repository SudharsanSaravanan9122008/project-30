class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visiblity = 255;
      this.image = loadImage("images/block.png");
    }
    display(){
      var pos= this.body.position;
      
      if(this.body.speed < 3){
        
        image(this.image, pos.x,pos.y,this.width, this.height);
        pop();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255, this.Visiblity);
        imageMode(CENTER);
        image(this.image, pos.x,pos.y,this.width, this.height);
        pop();  
      }
    }
}