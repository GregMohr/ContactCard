$(document).ready(function(){
  $("form").submit(function(){
    console.log($(this).serialize())
    var first = $('[name="FirstName"]').val();
    var last = $('[name="LastName"]').val();
    var Description = $('[name="Description"]').val();
    $('#container').append(`
      <div class="Card">
        <h2>${first + " " + last}</h2>
        <p>${Description}</p>
      </div>`)
      $('[name="FirstName"], [name="LastName"], [name="Description"]').val("");
    return false;
  })
  $(document).on('click', '.Card', function(){
    $(this).children('p').slideToggle();
    return false;
  })
})
