function(el) {
    let tables = document.querySelectorAll('table');
    let tablesArray = Array.from(tables);

    let tableShow = tablesArray.filter((el) => {
        return getComputedStyle(el).display !== "none"
    });
    return tableShow[0].getAttribute("id")
}

