const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um nome: ', (name) => {
        fs.readFile(__dirname + '/static/csv/nomes.csv', 'utf8', (err, data) => {
            if (err) {
                console.error('Erro ao ler o arquivo:', err);
                rl.close();
                return;
            }
        
            const names = data.split('\n').map(line => line.trim().toLowerCase());
            if (names.includes(name.toLowerCase())) {
                console.log(`${name} está na lista.`);
            } else {
                console.log(`${name} não está na lista.`);
            }
            rl.close();
        });
    });