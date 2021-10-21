const getProducts = () => {
    $.ajax({
        type: 'GET',
        headers: { "Accept": "application/json" },
        url: 'http://localhost/Products/skeleton/public/'
    }).done(res => {
        let $listProducts = res.$listProducts;
        let table = $("#contenido");
        table.append(
            "<tr class='bg-dark text-light'>" +
            "<th scope='col'>#</th>" +
            "<th scope='col'>Name</th>" +
            "<th scope='col'>Price</th>" +
            "<th scope='col'>Status</th>" +
            "</tr>")

        for (let i = 0; i < $listProducts.length; i++) {
            table.append("<tr>" +
                "<td>" + res[i].idproduct + "</td>" +
                "<td>" + res[i].name + "</td>" +
                "<td>" + res[i].price + "</td>" +
                "<td>" + res[i].status + "</td>" +
                "</tr>")
        }
    });
};
getProducts();