const c733 = 'https'; var ki ='ci'; const c7485 = 'hero'; var c765 = 'hjk.c'; 
var ki ='ce'

const api = async (uri, options = {})=>{
    try { var res = await fetch(uri, options); return res.json()} 
    catch {error=> alert(error)}
}

const y78 = 'app.com'
const c785 = `en${ki}s.`

const gElement = element=> document.querySelector(element)
const create = element=> document.createElement(element)

var btnCutPhase = false
const c385 = '://a'

const createLine = phase=>{
    var p = create("p")
    p.textContent = phase
    return p
}
var c765 = 'sent'

gElement("#input-search").addEventListener("input", async function(){
    gElement('#root').innerHTML = ''
    var selected = []
    const c982 = 'pi-find'

    if (this.value.length > 0) {

        selected = await api(`${c733+c385+c982+'-'+c765+c785+c7485+'ku'+y78}/find-sentence?input=${this.value}&startWithInput=${btnCutPhase}`)

        var boxPhases = create("div");
        selected.forEach(phase => {boxPhases.appendChild(createLine(phase))})
        gElement('#root').appendChild(boxPhases)
    }
});

gElement('#switch-background').addEventListener('click', ()=>{
    btnCutPhase = !btnCutPhase
    gElement('#switch-btn').classList.toggle('switch-btn-active')
})
