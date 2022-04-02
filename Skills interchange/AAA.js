var amar={
    name:"Amar",
    city:"Goa",
    skill:"Singer"
}
var akbar={
    name:"Akbar",
    city:"Mumbai",
    skill:"Chef"
}
var anthony={
    name:"Anthony",
    city:"Kashmir",
    skill:"Magician"
}
function SkillInterchange(a){
    console.log(`Now, ${a}'s skill is ${this.skill} `)
}
var AmarSkill = SkillInterchange.call(anthony,"Amar");
var AkbarSkill = SkillInterchange.call(amar,"Akbar");
var AnthonySkill = SkillInterchange.call(akbar,"Anthony")