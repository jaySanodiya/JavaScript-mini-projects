var grandParent = {
    SkinTone:"Black",
    Born:"seoni",
    Language:"Hindi",
}
var Parent = Object.create(grandParent);
Parent.Hair = "Thick";
console.log(Parent);
var me = Object.create(Parent);
me.school="Masai";
console.log(me);