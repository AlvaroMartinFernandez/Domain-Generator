const pronoun = ['the','our'];
const adj = ['great', 'big' ];
const noun = ['jogger','racoon','puedes'];
const ext =['.com','.net','.es','.eu'];
let domain=[];
for(let p=0;p<pronoun.length;p++)
{
  for(let a=0;a<adj.length;a++)
  {
    for(let n=0;n<noun.length;n++)
    {
      for(let e=0;e<ext.length;e++){
        domain.push(pronoun[p]+adj[a]+noun[n]+ext[e]); 
      }
    }
  }
}
console.log(domain);

//hacemos el hack con el noun puedes.
const hack= (word)=>{
let wordSlice= word.split(".");
console.log(wordSlice.slice(-2));
if( wordSlice[0].slice(-2)=== "es")
{
  return wordSlice[0].slice(0,-2)+".es";
}
else if( wordSlice[0].slice(-2)== "eu")
{
  return wordSlice[0].slice(0,-2)+".eu";
}
else if( wordSlice[0].slice(-3)== "com")
{
  return wordSlice[0].slice(0,-3)+".com";
}
else if( wordSlice[0].slice(-3)== "net")
{
  return wordSlice[0].slice(0,-3)+".net";
}
else
{
return word;
}

};
console.log(hack("Puedes.Mundo"));
let hackDomain=domain.map(hack);
console.log(hackDomain);
