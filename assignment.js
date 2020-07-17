// feetToMile
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var mynum = feetToMile(5);
console.log(mynum);

//woodCalculatior
function woodCalculatior(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var total = chairCount + tableCount + bedCount;
    return total;
}
var regult = woodCalculatior(5, 7, 6);
console.log(regult);

//tinyFriend
function tinyFriend(names){
    var tiny = names[0];
    for(i = 0; i < names.length; i++){
        var currentName = names[i];
        if(currentName.length < tiny.length){
            tiny = currentName;
        }
    }
    return tiny;
}
var result = tinyFriend(['alamgir', 'shagor', 'joni', 'sakib', 'rakbi', 'alamgirHShagor' ]);
console.log(result);