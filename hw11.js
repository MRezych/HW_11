// ? Начальник цеха пригласил людей на совещание
// ? Каждый, кто входит в кабинет пожимает руки всем присутствующим
// ? Сколько человек зашло в кабинет, если известно,
// ? что всего произошло 120 рукопожатий.

function getPeople(handshake) {
   let count, handshakes;
      count = 1;
      handshakes = 0;
      while (handshakes != handshake) {
      count +=1;
      handshakes +=(count-1);
   }
console.log(count-1)
}
      
getPeople(120)



