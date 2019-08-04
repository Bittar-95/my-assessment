function Animal(animalname,type)
{
  this.animalName = animalname;
  this.type = type;
}

Animal.prototype.animalName = function (){return this.animalName}
Animal.prototype.createElement = function (){
    var div = document.createElement('h1');
    div.innerHTML = this.animalName + ' '+this.type;
    document.getElementsByTagName('body')[0].appendChild(div);
    



}

var object = new Animal('TEST','Dog');


class shape
{
    _height;
    _length;
    _area;
    constructor(height ,length , area)
    {
        this._height = height;
        this._length = length;
        this._area = area;
    }
   getArea = function(){
       return _area;
    }
}

var objeect2 = new shape(15,20,30);




var a = (arr)=>
{
var counter = 0;
	var result = arr.filter(x=>
{
if(counter<4){
		counter++;
	return x;
	
}


});
return result;


}