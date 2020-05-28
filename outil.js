//Affichage du Classement
$("#bcl").on("click",function(){
    $.get("http://localhost:5000/score/all",function(data){
        data=JSON.stringify(data);
        data=JSON.parse(data);
        $("#classement").empty();
        data.sort(function(a,b){
            if((a.score/a.nbPartie)>(b.score/b.nbPartie)){
                return -1;
            }else{
                return 1;
            }
        })
        for(let i=0;i<data.length;i++){
            let moy;
            if(data[i].nb_partie!=0){
            moy=Math.round(data[i].score/data[i].nbPartie*100);
            }else{
            moy=0;
            }
            let text=data[i].pseudo+" : "+data[i].score+" points en "+data[i].nbPartie+" parties soit "+moy+"% avec "+data[i].enAttente+" points en attente<br>";
            $("#classement").append(text);
        }
    })
})
//Création d'un prototype pour enlever les accents d'une chaîne de caractères 
String.prototype.sansAccent = function(){
    var accent = [
        /[\300-\306]/g, /[\340-\346]/g, // A, a
        /[\310-\313]/g, /[\350-\353]/g, // E, e
        /[\314-\317]/g, /[\354-\357]/g, // I, i
        /[\322-\330]/g, /[\362-\370]/g, // O, o
        /[\331-\334]/g, /[\371-\374]/g, // U, u
        /[\321]/g, /[\361]/g, // N, n
        /[\307]/g, /[\347]/g, // C, c
    ];
    var noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];
    
    var str = this;
    for(var i = 0; i < accent.length; i++){
        str = str.replace(accent[i], noaccent[i]);
    }
    
    return str;
}