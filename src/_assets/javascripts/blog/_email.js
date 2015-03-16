window.Email = {}

Email.add = function(email, book_only, source) {
  url = "/emails"
  $.post(url, { email: email, book_only: book_only, source: source}, function(data) {
    if (data.errors) {
      Email.alert(data.errors, false)
    } else {
      Email.alert("added email!", true)
    }
  })
}

Email.enable = function() {
  $('.email-form-submit').removeAttr('disabled')
  $('.newsletter-email-input').removeAttr('disabled')
}

Email.disable = function() {
  $('.email-form-submit').attr('disabled', true)
  $('.newsletter-email-input').attr('disabled',true)
}

Email.parse = function (form) {
  Email.disable()
  form = $(form).parents('.email-form')
  email = form.find('.newsletter-email-input').val()
  book_only = form.find('.newsletter-book-only-input').is(':checked')
  source = form.find('.newsletter-source').val()
  Email.add(email, book_only, source)
}

Email.alert = function(text, success) {
   alert = $('.newsletter-alert')
  if (success) {
    alert.removeClass('warning')
    alert.addClass('success')
    alert.show()
    alert.html("Success! In the meantime, you can follow me on <a href='https://twitter.com/dmix'>Twitter</a>")
  } else {
    alert.removeClass('success')
    alert.addClass('warning')
    alert.show()
    alert.html(text)
    Email.enable()
  }
}

Email.ready = function() {
  $('.email-form').submit(function() {
    Email.parse($(this).find('.email-form-submit'))
    return false;
  })
  $('.email-form-submit').click(function() {
    Email.parse($(this))
    return false;
  })
}

$(document).ready(Email.ready);
