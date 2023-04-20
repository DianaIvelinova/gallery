jQuery(document).ready(function($) {
	
	$('.tabs li').on("click", function() {
		switch($(this).data('role')) {
			case 'grid':
				$(".gallery").addClass("grid").removeClass("list").removeClass("masonry");
				$(".gallery").masonry('destroy');
				break;
			
			case 'list':
				$(".gallery").removeClass("grid").removeClass("masonry");
				$(".gallery").masonry('destroy'); 
				break;
			
			case 'masonry':
				$(".gallery").addClass("masonry").removeClass("list").removeClass("grid");
				$('.gallery.masonry').masonry({
					itemSelector: '.item',
					percentPosition: true
				});
				break;
		}
		console.log("role", $(this).data("role"))
		localStorage.setItem("selected_gallery_tab", $(this).data('role'));
	});
	const selected_gallery_tab = localStorage.getItem("selected_gallery_tab");
	$(`.tabs [data-role="${selected_gallery_tab}"]`).click();
})	