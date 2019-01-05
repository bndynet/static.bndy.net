function mylogo(options) {
    var size = options.size || 512;
    var color1 = Array.isArray(options.colors) ? options.colors[0] : options.colors;
    var color2 = Array.isArray(options.colors) ? options.colors[1] : options.colors;
    var color3 = Array.isArray(options.colors) ? options.colors[2] : options.colors;
    var bgColor = options.background;
    var bgCircle = `<circle cx="256" cy="256" r="256" stroke-width="0" fill="${bgColor}"/>`;
    var bgRect = `<rect fill="${bgColor}" height="512" width="512"/>`;
    var bg = "";
    if (bgColor) {
        bg = `<g> <title>background</title> ${options.circle ? bgCircle : bgRect} </g> `;
    }
    var template = `
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
    ${bg}
    <g xmlns="http://www.w3.org/2000/svg" transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
        <title>frontgroud</title>
        <path fill="${color1}" d="M735 3652 c-3 -3 -5 -168 -5 -366 l0 -361 1087 1 c599 1 1093 2 1098 3 7 1 11 119 10 364 l0 362 -1092 1 c-601 1 -1095 -1 -1098 -4z"/>
        <path fill="${color2}" d="M3659 3621 c0 -20 -1 -349 -2 -731 l-2 -695 -722 0 c-397 0 -726 -4 -730 -9 -4 -4 -8 -168 -8 -365 l0 -357 1097 -2 1098 -2 0 1099 0 1098 -365 0 -365 0 -1 -36z"/>
        <path fill="${color3}" d="M734 2191 c-2 -2 -4 -167 -4 -366 l0 -362 365 0 c327 0 365 2 366 16 4 75 3 711 -1 712 -16 3 -722 3 -726 0z"/>
    </g>
</svg>`;
    return template;
}