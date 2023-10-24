console.log('Lesson day 19 - JS Control structure exercise')
let too=10
let too2=20
let too3=30
let ner='Bold'
let ner2='Tulga'
let ner3='Naraa'
let unen=true
let hudal=false
let isMongolian=true
let hasMongolianPassword=false
if(isMongolian){
    console.log('Sain uu')
} else if(isMongolian && hasMongolianPassword){
    console.log("You're mongolian")
} else {
    console.log("You're not mongolian")
}
for(let i=0; i<ner.length; i++){
    console.log(ner[i])
}
let i=0
while(i<ner.length){
    console.log(ner[i])
    i+=1
}