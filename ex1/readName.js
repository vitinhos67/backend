process.stdout.write("Digite seu nome: ");

process.stdin.on("data", (data) => {
    const nome = data.toString().trim();
    console.log(`Olá, ${nome}!`);
    process.exit();
});