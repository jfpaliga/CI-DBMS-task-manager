document.addEventListener('DOMContentLoaded', function () {
    // sidenav initialisation
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
});

document.addEventListener('DOMContentLoaded', function () {
    let delete_modal = document.querySelectorAll('.modal');
    M.Modal.init(delete_modal);
});

document.addEventListener('DOMContentLoaded', function () {
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: { done: "Select" }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
});