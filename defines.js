const gamesize = 20
const fieldsize = 15;



const double_cons = [
    "fftt",
    "ftft",
    "fttf",
    "tfft",
    "tftf",
    "ttff",
]

const triple_cons = [   
    "tttf",
    "ttft",
    "tftt",
    "fttt",
]

const fields = [
    "ffff",
    "ffff",
    "ffff",
    "ffff",
    "ffff",
    "ffff",
    "ffff",
    "ffff",
    "ffff",
    "ffff",
    "ffff",

    ...double_cons,
    ...double_cons,

    ...triple_cons,
    ...triple_cons,

    "tttt"
]


var range = []
var rules = [];

for (var i=0; i<fields.length; i++) {
    rules.push([[], [], [], []]);
    range.push(i);
}


function addRule(i, j) {
    if (fields[i][0] == fields[j][1]) {
        rules[i][0].push(j);
    }
    if (fields[i][1] == fields[j][0]) {
        rules[i][1].push(j);
    }
    if (fields[i][2] == fields[j][3]) {
        rules[i][2].push(j);
    }
    if (fields[i][3]== fields[j][2]) {
        rules[i][3].push(j);
    }
}

for (var i=0; i<fields.length; i++) {
    for (var j=0; j<fields.length; j++) {
        addRule(i, j);
    }
}

console.log(rules)