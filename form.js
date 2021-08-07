class Form
{
 constructor(){
this.heading = createElement('h1')
this.inputBox = createInput("ENTER YOUR NAME")
this.button = createButton("PLAY!")
this.greeting = createElement('h1')
 }
 displayForm(){
 this.heading.position(displayWidth - 1200, displayHeight - 1050)
 this.heading.html("Welcome to my car racing game!")
 this.inputBox.position(displayWidth - 1050, displayHeight - 950)
 this.button.position(displayWidth - 1000, displayHeight - 850)
 this.button.mousePressed(()=>{
 this.inputBox.hide()
 this.button.hide()
 var name = this.inputBox.value()
 this.greeting.html("Hi " + name )
 this.greeting.position(displayWidth - 1050, displayHeight - 950)
 })

 }
}
