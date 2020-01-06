var select = '<option selected="selected" disabled="disabled">宝贝年龄</option>';
for (var i = 4; i < 19; i++) {
	select += '<option value="' + i + '">' + i + '岁</option>'
}
$('.age').html(select);
$(document).ready(function() {
	new WOW().init();
	$('.cont1').fadeIn(1000);
	setTimeout(function() {
		$('.cont1').click(function() {
			$(this).hide();
			$('.cont2').fadeIn(1000);
			setTimeout(function() {
				$('.cont2').click(function() {
					$(this).hide();
					$('.cont3').fadeIn(1000);
					setTimeout(function() {
						$('.cont3').click(function() {
							$(this).hide();
							$('.cont4').fadeIn(1000);
							setTimeout(function() {
								$('.cont4').click(function() {
									$(this).hide();
									$('.cont5').fadeIn(1000);
								});
							}, 5900);
						});
					}, 3800);
				});
			}, 5900);
		});
	}, 4500);
})
