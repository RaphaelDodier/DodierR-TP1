export class anim_element {
constructor(elmTitre) {
  this.elmTitre = elmTitre
}

anim(){
    console.log('///////// animation //////////')
    console.log(this.elmTitre.tagName)
    let elmTitre = this.elmTitre.children[0]
    console.log(elmTitre.tagName)
    elmTitre.classList.add('animTitre')


}

}