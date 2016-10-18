$(function() {

	$( document ).ready(function() {
		var price, vat, pobr, dostavka, kurs, interes;

		var $price = $('#pol-price');
		var $pobr = $('#pol-pobr');
		var $doPrice = $('#calc-price');
		var $endPrice = $('#ready-price');
		var $priceForm = $('#product-price')

		vat = 0.9;
		dostavka = 36;
		kurs = 7;
		interes = 1.25;

		function formula (p, p1) {

			console.log(p + " " + p1)

			if(price > 300) {
				var end = ((p * vat + p1 + dostavka) * kurs) * interes;
				return  end
			}
			else {
				var end = ((p + p1 + dostavka) * kurs) * interes;
				return  end
			}
		}

		$priceForm.submit(function(event) {
			event.preventDefault();
			pobr =  parseFloat($pobr.val())
			price = parseFloat($price.val())
			console.log('sdsd')
			$endPrice.css('width', '100%')
			$endPrice.text(formula (price, pobr));
		});

	});

  function equalHeight(group) {
    var tallest = 0;
    group.each(function() {
      thisHeight = $(this).height();
      if(thisHeight > tallest) {
        tallest = thisHeight;
      }
    });
    group.height(tallest);
  }        
  $(document).ready(function(){
    if(!device.mobile() && !device.tablet()){
      equalHeight($(".column"));
    }
  }); 

});

