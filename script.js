let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
         this.state=(Math.floor(Math.random()* 2));   
         return this.state;  
         console.log(this.state)

    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
           if (this.state === 0) {
           return "tails"
               return  "heads"
           }
    
          // if state is 0
           //return tails 
          // else states is 1
          // return heads
    },
    toHTML: function() {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
           if (this.state ===1) {
               return image.src = "./assets/heads.png"
           } else {
               image.src = "./assets/tails.png"
           }
           return image;
           /* state is 0 
            else state is 1
           set image to heads
        return image; */
    }
};

/*console.log (coin.toString());
console.log(coin.toString());*/

const display20Flips = (coin) => {
    for (let i = 0;i < 20; i++) {
        coin.flip()
        let p= document.createElement ('p')
        p.innerHTML= `${coin.toString()}`
        document.body.appendChild(p)
    }
    /*uses a loop to flip the coin 20 times.
     Each time the coin flips, 
     display the result of each flip as a string on the page
      (make use of your toString() method)*/
}

const display20Images = ( coin) =>{
    for (let i=0; i < 20; i++) {
        coin.flip()
        document.body.appendChild(coin.toHTML())
    }
    /* using a loop to flip the coin 20 times
     display the result as a string
      display the result of each flip as an HTML IMG
       element on the page 
       (make use of your toHTML() method). */
}
console.log (coin.flip());
console.log(coin.toString());
console.log (coin.toHTML());