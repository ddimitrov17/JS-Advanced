function solve() {
  let namingConvention = document.getElementById('naming-convention').value;
  let toTransform = document.getElementById('text').value;
  let myArray = toTransform.split(` `);
  let resultRef=document.getElementById('result');
  if (namingConvention == 'Pascal Case') {
    for (i=0;i<myArray.length;i++) {
      let firstPart = myArray[i].slice(0, 1).toUpperCase();
      let secondPart = myArray[i].slice(1).toLowerCase();
      myArray[i]=firstPart+secondPart;
    }
  } else if (namingConvention == 'Camel Case') {
    myArray[0]=myArray[0].toLowerCase();
    for (i=1;i<myArray.length;i++) {
      let firstPart = myArray[i].slice(0, 1).toUpperCase();
      let secondPart = myArray[i].slice(1).toLowerCase();
      myArray[i]=firstPart+secondPart;
    }
  } else {
    resultRef.textContent=`Error!`;
    return;
  }
  resultRef.textContent=`${myArray.join('')}`;
}