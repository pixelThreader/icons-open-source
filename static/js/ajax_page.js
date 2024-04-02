function ajax_load_page(this_a_tag, to_page) {
    event.preventDefault();
    load_Page(this_a_tag, to_page);

};
function load_Page(this_a_tag, to_page) {
fetch(`${to_page}`)
    .then(response => response.text())
    .then(data => {
        document.open();
        document.write(data);
        document.close();
        window.history.pushState({}, '', `${to_page}`);
    })
    .catch(error => {
        console.log("An error occurred:", error);
    });
};