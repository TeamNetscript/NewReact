import Slider from "react-slick";  
 
function bannerSlide(){

	const settings = {
      dots: false,
      infinite: true,
      speed: 500, 
      centerMode: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1, 
          }
        } 
      ]
    };

	return(

		<div className="bannerSlide">
			<div className="container"> 
		          <div className="bannerSlideMain">
		            <Slider className="cat" {...settings}>
		              <div className="cat-item">
		              	<div className="catItemLeft"> 
		              	</div>
		              	<div className="catItemRight">
		              		<h3>Mobile Apps</h3>
		              		<p>Australia’s favourite <a href="#">wedding planning app</a> is available on the <a href="#">App Store</a>
		              		and <a href="#">Google Play</a>. You can use the Easy Weddings App to manage your wedding to-do list, budget, guest list, supplier browsing,
		              		 and vision board. One of the app's most popular features is the wedding style quiz. Download the free app today, and 
		              		 start planning your wedding from the palm of your hand!</p>
		              	</div>
		              </div>
		              <div className="cat-item">
		              	<div className="catItemLeft"> 
		              	</div>
		              	<div className="catItemRight">
		              		<h3>Mobile Apps</h3>
		              		<p>Australia’s favourite <a href="">wedding planning app</a> is available on the <a href="#">App Store</a>
		              		and <a href="#">Google Play</a>. You can use the Easy Weddings App to manage your wedding to-do list, budget, guest list, supplier browsing,
		              		 and vision board. One of the app's most popular features is the wedding style quiz. Download the free app today, and 
		              		 start planning your wedding from the palm of your hand!</p>
		              	</div>
		              </div>
		            </Slider>
		          </div> 
		    </div> 	 
		</div>

	);
}

export default bannerSlide;