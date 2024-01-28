document.addEventListener('DOMContentLoaded', function () {
    // sidenav initialisation
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
});

document.addEventListener('DOMContentLoaded', function () {
    // modal initialisation
    let delete_modal = document.querySelectorAll('.modal');
    M.Modal.init(delete_modal);

    // datepicker initialisation
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: { done: "Select" }
    });

    // select initialisation
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // collapsible initialisation
    let collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
});
