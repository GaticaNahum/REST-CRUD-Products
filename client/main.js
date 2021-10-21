const getProducts = () => {
    $.ajax({
        type: 'GET',
        headers: { "Accept": "application/json" },
        url: 'http://localhost/Products/skeleton/public/'
    }).done(res => {

        let listProducts = res.listProducts;
        let table = $("#contenido");
        table.append(
            "<tr class='bg-dark text-light'>" +
            "<th scope='col'>#</th>" +
            "<th scope='col'>Name</th>" +
            "<th scope='col'>Price</th>" +
            "<th scope='col'>Status</th>" +
            "</tr>")

        for (let i = 0; i < listProducts.length; i++) {
            table.append(
                "<tr>" +
                "<td>" + listProducts[i].idproduct + "</td>" +
                "<td>" + listProducts[i].name + "</td>" +
                "<td>" + listProducts[i].price + "</td>" +
                "<td>" + listProducts[i].status + "</td>" +
                "</tr>")
        }
    });
};
getProducts();