function print_today() {
  // ***********************************************
  // AUTHOR: WWW.CGISCRIPT.NET, LLC
  // URL: http://www.cgiscript.net
  // Use the script, just leave this message intact.
  // Download your FREE CGI/Perl Scripts today!
  // ( http://www.cgiscript.net/scripts.htm )
  // ***********************************************
  var now = new Date();
  var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
  var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
  function fourdigits(number) {
    return (number < 1000) ? number + 1900 : number;
  }
  var today =  months[now.getMonth()] + " " + date + ", " + (fourdigits(now.getYear()));
  return today;
}

// from http://www.mediacollege.com/internet/javascript/number/round.html
function roundNumber(number,decimals) {
  var newString;// The new rounded number
  decimals = Number(decimals);
  if (decimals < 1) {
    newString = (Math.round(number)).toString();
  } else {
    var numString = number.toString();
    if (numString.lastIndexOf(".") == -1) {// If there is no decimal point
      numString += ".";// give it one at the end
    }
    var cutoff = numString.lastIndexOf(".") + decimals;// The point at which to truncate the number
    var d1 = Number(numString.substring(cutoff,cutoff+1));// The value of the last decimal place that we'll end up with
    var d2 = Number(numString.substring(cutoff+1,cutoff+2));// The next decimal, after the last one we want
    if (d2 >= 5) {// Do we need to round up at all? If not, the string will just be truncated
      if (d1 == 9 && cutoff > 0) {// If the last digit is 9, find a new cutoff point
        while (cutoff > 0 && (d1 == 9 || isNaN(d1))) {
          if (d1 != ".") {
            cutoff -= 1;
            d1 = Number(numString.substring(cutoff,cutoff+1));
          } else {
            cutoff -= 1;
          }
        }
      }
      d1 += 1;
    } 
    if (d1 == 10) {
      numString = numString.substring(0, numString.lastIndexOf("."));
      var roundedNum = Number(numString) + 1;
      newString = roundedNum.toString() + '.';
    } else {
      newString = numString.substring(0,cutoff) + d1.toString();
    }
  }
  if (newString.lastIndexOf(".") == -1) {// Do this again, to the new string
    newString += ".";
  }
  var decs = (newString.substring(newString.lastIndexOf(".")+1)).length;
  for(var i=0;i<decimals-decs;i++) newString += "0";
  //var newNumber = Number(newString);// make it a number if you like
  return newString; // Output the result to the form field (change for your purposes)
}

function update_total() {
  var total = 0;
  $('.price').each(function(i){
    price = $(this).html().replace("$","");
    if (!isNaN(price)) total += Number(price);
  });

  total = roundNumber(total,2);

  $('#subtotal').html("$"+total);
  $('#total').html("$"+total);
  
  update_balance();
}

function update_balance() {
  var due = $("#total").html().replace("$","") - $("#paid").val().replace("$","");
  due = roundNumber(due,2);
  
  $('.due').html("$"+due);
}

function update_price() {
  var row = $(this).parents('.item-row');
  var price = row.find('.cost').val().replace("$","") * row.find('.qty').val();
  price = roundNumber(price,2);
  isNaN(price) ? row.find('.price').html("N/A") : row.find('.price').html("$"+price);
  
  update_total();
}

function bind() {
  $(".cost").blur(update_price);
  $(".qty").blur(update_price);
}
function reArrange(){
    //alert("re arranging...");
var rows = $("#invItems tbody tr.item-row");
    rows.each(function (i) {
       // alert(i);
        var flds = $(this).find('input');
        flds.eq(0).attr('id', 'seq'+i )
            .attr('name', 'InvoiceItems['+i+'][sequence]' )
            .attr('value', i );
        flds.eq(1).attr('id', 'idpk'+i )
            .attr('name', 'InvoiceItems['+i+'][ID]' );
    
        var inputs = $(this).find('textarea');
        
        inputs.eq(0).attr('id', 'desc'+i )
            .attr('name', 'InvoiceItems['+i+'][DESCRIPTION]' );
           // .attr('id', 'title'+i );
        inputs.eq(1).attr('id', 'price'+i )
            .attr('name', 'InvoiceItems['+i+'][PRICE]' );
           // .attr('value', 'link'+i );
        inputs.eq(2).attr('id', 'qty'+i )
            .attr('name', 'InvoiceItems['+i+'][QUANTITY]' );
           // .attr('value', 'link'+i );
        i++;   
    });
   // alert(document.getElementById('invItems').outerHTML);
}   
$(document).ready(function() {

  $('input').click(function(){
    $(this).select();
  });

  $("#paid").blur(update_balance);
   
  $("#addrow").click(function(){
    $(".item-row:last").after('<tr class="item-row"><td><div class="delete-wpr"><a class="delete" href="javascript:;" title="Remove row">X</a></div><input style="width:38px;display:none" type="text"><input style="width:38px;display:none" type="text" ></td><td class="description"><textarea></textarea></td><td><textarea class="cost"></textarea></td><td><textarea class="qty" ></textarea></td><td><textarea class="price"></textarea></td></tr>');
    
      if ($(".delete").length > 0) $(".delete").show();
    bind();
    reArrange();
  });
  
  bind();
  
  $('body').on('click',".delete",function(){
   // $(this).parents('.item-row').remove();
    if (confirm("Are you sure you want to delete this row?"))
        {
            var id = $(this).parent().parent().parent().attr('data-id');
            var data = 'id=' + id ;
            var parent = $(this).parent().parent().parent();
            if(id !==''){
            $.ajax(
            {
                   type: "POST",
                   url: "/statement/delItem",
                   data: data,
                   cache: false,
 
                   success: function()
                   {
                    parent.fadeOut('slow', function() {$(this).remove();});
                   }
             });
         }
        }
    
    update_total();
    if ($(".delete").length < 2) $(".delete").hide();
    reArrange();
  });
  
  $("#cancel-logo").click(function(){
    $("#logo").removeClass('edit');
  });
  $("#delete-logo").click(function(){
    $("#logo").remove();
  });
  $("#change-logo").click(function(){
    $("#logo").addClass('edit');
    $("#imageloc").val($("#image").attr('src'));
    $("#image").select();
  });
  $("#save-logo").click(function(){
    $("#image").attr('src',$("#imageloc").val());
    $("#logo").removeClass('edit');
  });
  
  $("#date").val(print_today());
  
});