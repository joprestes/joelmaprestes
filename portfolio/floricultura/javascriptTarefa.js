
function insere(){
	let codigo = document.forms["cadastrar"]["codigo"].value;
	let preco = document.forms["cadastrar"]["preco"].value;
	let nome = document.forms["cadastrar"]["nome"].value;
	let descricao = document.forms["cadastrar"]["descricao"].value;
	let qtd = document.forms["cadastrar"]["qtd"].value;
	let adicionais = document.forms["cadastrar"]["adicionais"].value;


	let inserir = window.document.getElementById("inserirTabela");

	inserir.innerHTML = `<th scope="row">${codigo}</th>`;
	inserir.innerHTML +=	`<td>${nome}</td>`;
	inserir.innerHTML +=	`<td>${descricao}</td>`;
	inserir.innerHTML +=	`<td>${preco}</td>`;
	inserir.innerHTML +=	`<td>${qtd}</td>`;
	inserir.innerHTML +=	`<td>${adicionais}</td>`;


}

