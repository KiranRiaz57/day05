// Q13
// let transports: string[] = ["Honda motorcycle","Tesla car","Bianchi bicycle"];
//  console.log("I would like to own a",transports[0])
//Q14
var guests = ["Kiran", "Mahrang", "Laiba"];
// guests.forEach(guest =>{
// console.log("Dear",guest,"would you like to join me for dinner?")
// })
// Q15
var unableToAttend = "Laiba";
console.log(unableToAttend, "cant make it to dinner.");
// replace the guset
var newGuest = "Saira";
guests[guests.indexOf(unableToAttend)] = newGuest;
// new invitations
guests.forEach(function (guest) {
    console.log("Dear", guest, "would you like to join me for dinner.");
});
