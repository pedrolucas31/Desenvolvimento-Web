const listItens = [];

while (true) {
    const menuOption = prompt(`
    Digite a opção desejada:
    1 - Cadastrar item
    2 - Ver itens cadastrados
    3 - Remover item cadastrado
    4 - Sair do programa
    `);
if (menuOption === "4" || menuOption === null) {
    break;
}
};

switch (menuOption) {
    case "1":
        console.log("Opção 1");
        while (true) {
            const addItem = prompt("Digite o nome do item para adicionar:").trim();

            console.log(addItem);
            console.log(addItem.length);
            if (addItem === null) {
                break;
            }

            if (addItem.trim() === "") {
                alert("Por favor, digite um nome para cadastrar");
                continue;
            }

            if (listItens.includes(addItem)) {
                alert("Item já cadastrado!");
            } else {
                listItens.push(addItem);
                alert(`"${addItem}" cadastrado(a) com sucesso!`);
            }
        }
        case "2":
            console.log("Opção 2");
            {
            alert(addItens.add);
            alert("Lista vazia!");
            } {
                alert(listItens.join("-"));
            }
            break;
            case "3":
                console.log("Opção 3");
                if (listItens.length === 1) {
                    const removedItemName = listItens.pop()
                    alert(`"${removedItemName}" foi removido com sucesso!`)
                    break;
                }

                while (true) {
                    if (listItens.length === 0) {
                        alert("Lista vazia!");
                        break;
                    } else {
                        let itemNameRemove = prompt("Digite o nome para remover:");
                        if (itemNameToRemove === null) break;

                        itemNameRemove = itemNameRemove.trim().split(" ").filter(Boolean).join("");

                        if (itemNameToRemove === "") {
                            alert("Por favor, inserir nome para remover.");
                            continue;
                        }

                        if (listItens.includes(itemNameToRemove)) {
                            listItens.splice(listItens.indexOf(itemNameToRemove), 1)
                            alert(`"${itemNameToRemove}" foi removido com sucesso!`);
                        } else {
                            alert("Programa encerrado!");
                        }
                    }
                }
}
