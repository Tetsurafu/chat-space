$(document).on('turbolinks:load', function() {
  
  function appendUser(user) {
  var search_list = $('#chat-group-users');
  var html = `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">
                  ${user.name}
                </p>
                <div class="user-search-add chat-group-user__btn chat-group-user__btn--add"
                data-user-id=${user.id}" data-user-name=${user.name}>
                  追加
                </div>
              </div>`
  search_list.append(html);
  return html;
  }
  // function appendErrMsgToHTML(msg) {
  //   var html = `<div class='#user-search-field'>${ msg }            </div>`
  //   search_list.append(html);
  // }

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(data){
      $('#user-search-field').empty();
      if (data.length !==0) {
        data.forEach(function(user){
          appendUser(user);
        });
      }
      // else {
      //   appendErrMsgToHTML("一致するユーザーはありません");
      // }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
    })
  })
});
