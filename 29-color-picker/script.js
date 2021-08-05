const colorInputEl = document.getElementById('color')
colorInputEl.addEventListener('input', event => {
    const color = event.target.value
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
    if(color.match(hexColorRegex))
    {
        colorInputEl.style.borderColor = color
    }
    else
    {
        colorInputEl.style.borderColor = 'rgb(226,226,226)'
    }
})