function generateColors(){

    const chars = '0123456789ABCDEF'
    let color = '#'

    for(i = 0; i < 6; i++){
        color += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    return color;
}

document.getElementById('btn-action').addEventListener('click', () =>{
    let div_colors = document.querySelectorAll('#color-1,#color-2, #color-3, #color-4, #color-5')
    for(let i = 0; i < div_colors.length; i++){
        let color = generateColors()
        div_colors[i].style.backgroundColor = color;
        let text_color = document.getElementById(`txt-color-${i+1}`)
        text_color.textContent = `${color}`;
    }
})



