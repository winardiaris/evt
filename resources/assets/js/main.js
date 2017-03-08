$(document).ready(function(){
  $("div.isme img").click(function(){
  console.log("avatar click");
    $(".inputAvatar").click();
  });
  $("div.isme .inputAvatar").change(function(){
    $('.avatarSubmit').click();
  });
  $('input#username').keyup(function(){
    console.log($(this).val());
    $('input[name=usr]').val($(this).val());
  });
});

