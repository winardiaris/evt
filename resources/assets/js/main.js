$(document).ready(function(){
  $("div.isme .click-me").click(function(){
    $(".inputAvatar").click();
  });

  $("div.isme .inputAvatar").change(function(){
    $('.avatarSubmit').click();
  });
  $(".waterfall").waterfall();

  // $('input[name=username2]').keypress(function(){
  //   console.log($(this).val());
  //   $('input[name=username]').val($(this).val());
  // });
});