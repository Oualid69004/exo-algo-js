 // ex02

 const exo2 = (arr) => {
    let bat = 0;
    for (let i = 0; i < arr.length; i++) {
      let tmp = 1;
      for (let j = i; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          tmp = 0;
        }
      }
      bat += tmp;
    }
    return bat;
  };
  console.log("=========================");
  console.log("Exo2 : with tow loop O(n²)");
  console.log(exo2([3, 7, 8, 3, 6, 1]));
  console.log(exo2([1, 4, 5, 8]));
//**************************************** */



// ex04 and exo 06
const exo4 = (arr) => {
    let bat = 0;
    let position =0;
    for (let i = 0; i < arr.length; i++) {
      console.log("i"+i);
      console.log("position"+position);
  
        if (arr[i] >=arr[position] && i != position) {
          console.log(arr[i] + " boucle n " + i +  " " + arr[position] + " position " + position)
        i = position;
        position++;
        }
        // quand on atteint la fin du tableau et que ça continue de boucler
      if (i === arr.length - 1) {
        console.log(i + " @@@@@@ " + arr[i] + "@@@@@@@@"  + (arr[position]) + " " +  position)
        bat += 1;
        i = position;
        position++;
      }  
    }
    return bat;
  };
  console.log("=========================");
  console.log("Exo4 : with one loop O(n)");
  console.log(exo4([3, 7, 8, 3, 6, 1]));
  console.log(exo4([1, 4, 5, 8]));
  console.log(exo4([21, 18, 17, 16, 15,  15, 18, 15, 15, 18]))
  //**************************************** */