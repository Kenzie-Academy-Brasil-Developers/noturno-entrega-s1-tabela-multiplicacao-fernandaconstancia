function tabelaMulti (n = 10) {
    // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
    let x = []
    for (let linha = 0; linha <= n; linha++){                
        x[linha] = [];
        for (let coluna = 0; coluna <= n; coluna++){                
            x[linha][coluna] = linha * coluna
        }
    }
    console.table(x)

}