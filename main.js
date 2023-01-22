

const canvas = document.getElementById("drawing_canvas");
const ctx = canvas.getContext("2d");

function draw_field(k, x, y) {
    var f = fields[k];
    ctx.rect(x*fieldsize, y*fieldsize, fieldsize, fieldsize);
    ctx.stroke();
    if (f.includes("t")) {
        ctx.fillRect(x*fieldsize+fieldsize/3, y*fieldsize+fieldsize/3, fieldsize/3, fieldsize/3);
    }
    if (f[0]=="t") {
        ctx.fillRect(x*fieldsize+fieldsize/3, y*fieldsize+0*fieldsize/3, fieldsize/3, fieldsize/3);
    } 
    if (f[1]=="t") {
        ctx.fillRect(x*fieldsize+fieldsize/3, y*fieldsize+2*fieldsize/3, fieldsize/3, fieldsize/3);
    } 
    if (f[2]=="t") {
        ctx.fillRect(x*fieldsize+0*fieldsize/3, y*fieldsize+fieldsize/3, fieldsize/3, fieldsize/3);
    }
    if (f[3]=="t") {
        ctx.fillRect(x*fieldsize+2*fieldsize/3, y*fieldsize+fieldsize/3, fieldsize/3, fieldsize/3);
    }
}


function draw_combs(c) {
    for (var x = 1; x<gamesize-1; x++) {
        for (var y = 1; y<gamesize-1; y++) {
            draw_field(c[x][y] ,x, y)
        }
    }
}


draw_combs(combs);