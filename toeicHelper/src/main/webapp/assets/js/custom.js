$(function () {
  $('#login-form-link').click(function (e) {
    $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
  $('#register-form-link').click(function (e) {
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

});

$(function () {

  //Timepicker
  $('.timepicker').timepicker({
    showInputs: false
  });

  //Date picker
  $('#datepicker').datepicker({
    autoclose: true
  });

  $.widget.bridge('uibutton', $.ui.button);
});

//  <!-- page script -->
$(document).ready(function () {
  $('#example').DataTable();
});
