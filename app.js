const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon", "puedes"];
const ext = [".com", ".net", ".es", ".eu"];
let domain = [];
for (let p = 0; p < pronoun.length; p++) {
  for (let a = 0; a < adj.length; a++) {
    for (let n = 0; n < noun.length; n++) {
      for (let e = 0; e < ext.length; e++) {
        domain.push(pronoun[p] + adj[a] + noun[n] + ext[e]);
      }
    }
  }
}
console.log(domain);

//hacemos el hack.
const hack = (word) => {
  let wordSlice = word.split(".");

  if (wordSlice[1] === wordSlice[0].slice(-wordSlice[1].length))
    return wordSlice[0].slice(0, -wordSlice[1].length) + "." + wordSlice[1];
  else {
    return word;
  }
};
let hackDomain = domain.map(hack);
console.log(hackDomain);
