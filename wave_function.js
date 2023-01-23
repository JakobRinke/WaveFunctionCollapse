
function get_current_lowest_realm_cords(realm) {
    var current_lowest = [0, 0];
    var current_low = Infinity;
    for (var x = 1; x<gamesize-1; x++) {
        for (var y = 1; y<gamesize-1; y++) {
            if (realm[x][y].length != 0) {
                if (realm[x][y].length<current_low)
                {
                    current_low = realm[x][y].length;
                    current_lowest = [x, y];
                }
            }
        }
    }
    return current_lowest;
}

function collapse_neighbour(x, y, j, type, realm) {
    var new_list = [];
    rules[j][type].forEach(field=> {
        if (realm[x][y].includes(field)) {
            new_list.push(field);
        }
    });
    realm[x][y] = new_list;
}


function wave_function_collapse() {
    let realm = [];
    var combs = [];

    for (var i = 0; i<gamesize; i++)
    {
        realm.push([]);
        combs.push([]);
        for (var j = 0; j<gamesize; j++)
        {
            realm[i].push([...range]);
            combs[i].push(-1);
        }
    }


    for (var _ = 0; _<(gamesize-2)*(gamesize-2); _++) {
        var [cur_x, cur_y] =  get_current_lowest_realm_cords(realm);
        if (cur_x == 0 && cur_y == 0) {
            console.log(_);
            console.log((gamesize-2)*(gamesize-2));
            break;
        }
        combs[cur_x][cur_y] = realm[cur_x][cur_y][Math.floor(Math.random()*realm[cur_x][cur_y].length)];
        realm[cur_x][cur_y] = [];
        collapse_neighbour(cur_x, cur_y-1, combs[cur_x][cur_y], 0, realm);
        collapse_neighbour(cur_x, cur_y+1, combs[cur_x][cur_y], 1, realm);
        collapse_neighbour(cur_x-1, cur_y, combs[cur_x][cur_y], 2, realm);
        collapse_neighbour(cur_x+1, cur_y, combs[cur_x][cur_y], 3, realm);
    }

    return combs;
}
