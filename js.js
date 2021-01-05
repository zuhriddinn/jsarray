let yoz = [];

while (true) {
    let b = prompt('Yoz')

    if (b.split(' ')[0] == 'add,') {

        yoz.push(b.split(' ')[1])
    }
    else if (b.split(' ')[0] == 'del,') {
        for (key in yoz) {

            if (yoz[key] == b.split(' ')[1]) {
                yoz.splice(key, 1)
            }

        }
    } else if (b == 'stop') break
}
console.log(yoz);
