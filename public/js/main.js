$(document).ready(function(){
  $("div.isme .click-me").click(function(){
    $(".inputAvatar").click();
  });

  $("div.isme .inputAvatar").change(function(){
    $('.avatarSubmit').click();
  });
  $(".waterfall").waterfall();
  $(".bootstrap-tagsinput input").addClass('form-control');

  // $('input[name=username2]').keypress(function(){
  //   console.log($(this).val());
  //   $('input[name=username]').val($(this).val());
  // });
  $("#file-1").fileinput({
    uploadUrl: '#', // you must set a valid URL here else you will get an error
    allowedFileExtensions: ['jpg', 'png', 'svg'],
    overwriteInitial: false,
    maxFileSize: 1000,
    maxFilesNum: 10,
    slugCallback: function (filename) {
        return filename.replace('(', '_').replace(']', '_');
    }
  });
});
 $(function () {
      $('#timestart').datetimepicker();
      $('#timeend').datetimepicker({
          useCurrent: false //Important! See issue #1075
      });
      $("#timestart").on("dp.change", function (e) {
          $('#timeend').data("DateTimePicker").minDate(e.date);
      });
      $("#timeend").on("dp.change", function (e) {
          $('#timestart').data("DateTimePicker").maxDate(e.date);
      });
  });