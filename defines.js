const gamesize = 10
const fieldsize = 30;

const fields = [
    "ffff",
    "fftt",
    "ftft",
    "fttf",
    "fttt",
    "tfft",
    "tftf",
    "tftt",
    "ttff",
    "ttft",
    "tttf",
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