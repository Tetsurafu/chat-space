$(document).on('turbolinks:load', function() {
    function buildHTML(message){
      var img = message.image ? `<img src= ${ message.image }>` : "";
      var html =  `<div class="message">
                    <div class="basic-info">
                      <p class="basic-info__user">
                        ${message.user_name}
                      </p>
                      <p class="basic-info__date"> 
                        ${message.date}
                      </p>
                    </div>
                    <p class="message__text">
                      <p class="message__text__content">
                        ${message.content}
                      </p>
                    </p>
                      <p class="message__text__image">
                        ${img}
                      </p> 
                  </div>`
      return html;
    }

    $('form').on('submit', function(e) {
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action');
      $.ajax({  
        url: url,
        type: 'POST',
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(data){
        var html = buildHTML(data);
        $('.messages').append(html)
        $('.new_message').val('')
        $('.form__submit').removeAttr('disabled');
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
      })
      .fail(function(data) {
        alert('エラーが発生したためメッセージは送信できませんでした。')
      })
    });
  });
