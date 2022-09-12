const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  //code here
  if(word == null){
    return undefined
  }else if(word == undefined){
    return undefined
  }else if(startWord == word){
    return "word"
  }else 
    return startWord+word
}
module.exports = fillStartWord
