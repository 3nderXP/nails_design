export default class Menu{

    button
    bar

    constructor(button, bar) {

        try{

            const paramsType = {
                button: typeof button,
                bar: typeof bar
            }

            if(paramsType.button == "string" && paramsType.bar == "string") {

                const buttonDom = document.querySelector(button)
                const barDom = document.querySelector(bar)
    
                if(buttonDom && barDom){
    
                    this.button = buttonDom
                    this.bar = barDom
    
                    this.button.addEventListener('click', () => {
    
                        this.toggleMenu()
    
                    })
    
                } else {
    
                    throw "É necessário definir o botão do menu e a barra que irá aparecer ao pressionar o botão"
    
                }

            } else {

                throw "Os parâmetros precisam ser do tipo String"

            }

        } catch(error) {

            console.error(error)

        }

    }

    toggleMenu() {
        
        this.button.classList.toggle('opened')
        this.bar.classList.toggle('opened')
        document.body.classList.toggle('overflow-hidden')

    }

}