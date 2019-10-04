function Rectangle(x,y,Wight,Height) {
    this.x = x;
    this.y = y;
    this.wight = Wight;
    this.height = Height;
}

function createRectangle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let Wig = Math.floor(Math.random()*500);
    let Hei = Math.floor(Math.random()*300);
    let rectangle = new Rectangle(500,200,Wig,Hei);
    ctx.strokeRect(rectangle.x, rectangle.y,Wig,Hei);
    setTimeout(function () {
        alert("Diện tích hình chữ nhật là :"+Wig*Hei  + "     Chu vi hình chữ nhật là :" + (Wig+Hei)*2 );
    },1000);
}

createRectangle();
