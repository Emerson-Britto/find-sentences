const local = 'http://localhost:8877'
const api_FS = 'https://api-find-sentences.herokuapp.com'

const api = async (uri, options = {})=>{
    try { var res = await fetch(uri, options); return res.json()} 
    catch {error=> alert(error)}
}

const gElement = element=> document.querySelector(element)
const create = element=> document.createElement(element)

var btnCutPhase = false

const createLine = phase=>{
    var p = create("p")
    p.textContent = phase
    return p
}

gElement("#input-search").addEventListener("input", async function(){
    gElement('#root').innerHTML = ''
    var selected = []

    if (this.value.length > 0) {

        selected = await api(`${api_FS}/find-sentence?input=${this.value}&startWithInput=${btnCutPhase}`)

        var boxPhases = create("div");
        selected.forEach(phase => {boxPhases.appendChild(createLine(phase))})
        gElement('#root').appendChild(boxPhases)
    }
});

gElement('#switch-background').addEventListener('click', ()=>{
    btnCutPhase = !btnCutPhase
    gElement('#switch-btn').classList.toggle('switch-btn-active')
})
