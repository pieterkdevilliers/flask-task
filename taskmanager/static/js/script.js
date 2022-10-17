document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialisation
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // sidenav initialisation
      let datepicker = document.querySelectorAll('.datepicker');
      M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"}
      });

    // select initialization
      let selects = document.querySelectorAll('select');
      M.FormSelect.init(selects);
  });