<?php
// Create HOME Slider
function home_slider_template() { ?>
	
	<script type="text/javascript">

		// Send command to iframe youtube player
		function postMessageToPlayer( player, command ) {
			if ( player == null || command == null ) return;
			player.contentWindow.postMessage( JSON.stringify( command ), "*" );
		}

		jQuery( document ).on('ready', function () {
			var $homeSlider = jQuery( '#home-slider' );
			$homeSlider
				.on( 'init', function( event, slick ) {
					slick.$slides.not(':eq(0)').find('.video--local').each(function() {
						this.pause();
					});

					if ( slick.$slides.eq( 0 ).find( '.video--local' ).length ) {
						slick.$slides.eq( 0 ).find( '.video--local' )[0].play();
					}
					if ( slick.$slides.eq( 0 ).find( '.video--embed' ).length ) {
						var playerId = slick.$slides.eq( 0 ).find( 'iframe' ).attr( 'id' );
						var player = jQuery( '#' + playerId ).get( 0 );
						postMessageToPlayer( player, {
							'event': 'command',
							'func': 'playVideo'
						} );
					}
				} )
				.on( 'beforeChange', function( event, slick, currentSlide, nextSlide ) {
					// Pause youtube video on slide change
					if ( slick.$slides.eq( currentSlide ).find( '.video--embed' ).length ) {
						var playerId = slick.$slides.eq( currentSlide ).find( 'iframe' ).attr( 'id' );
						var player = jQuery( '#' + playerId ).get( 0 );
						postMessageToPlayer( player, {
							'event': 'command',
							'func': 'pauseVideo'
						} );
					}
					// Pause local video on slide change
					if ( slick.$slides.eq( currentSlide ).find( '.video--local' ).length ) {
						slick.$slides.eq( currentSlide ).find( '.video--local' )[0].pause();
					}

				} )
				.on( 'afterChange', function( event, slick, currentSlide ) {
					// Start playing local video on current slide
					if ( slick.$slides.eq( currentSlide ).find( '.video--local' ).length ) {
						slick.$slides.eq( currentSlide ).find( '.video--local' )[0].play();
					}

					// Start playing youtube video on current slide
					if ( slick.$slides.eq( currentSlide ).find( '.video--embed' ).length ) {
						var playerId = slick.$slides.eq( currentSlide ).find( 'iframe' ).attr( 'id' );
						var player = jQuery( '#' + playerId ).get( 0 );
						postMessageToPlayer( player, {
							'event': 'command',
							'func': 'playVideo'
						} );
					}

				} );

			$homeSlider.slick( {
				cssEase: 'ease',
				fade: true,  // Cause trouble if used slidesToShow: more than one
				arrows: false,
				dots: true,
				infinite: true,
				speed: 500,
				autoplay: true,
				autoplaySpeed: 5000,
				slidesToShow: 1,
				slidesToScroll: 1,
				slide: '.slick-slide', // Cause trouble with responsive settings
			} );
		} );
	</script>
	
	<?php $arg = array(
		'post_type'      => 'slider',
		'order'          => 'ASC',
		'orderby'        => 'menu_order',
		'posts_per_page' => - 1
	);
	$slider    = new WP_Query( $arg );
	if ( $slider->have_posts() ) : ?>
		
		<div id="home-slider" class="slick-slider">
			<?php while ( $slider->have_posts() ) : $slider->the_post(); ?>
				<div class="slick-slide">
					
					<div class="slick-slide__inner" <?php bg( get_attached_img_url( get_the_ID(), 'full_hd' ) ); ?>>
						<?php $bg_video_url = get_post_meta( get_the_ID(), 'slide_video_bg', true ); ?>
						<?php if ( get_post_format() == 'video' && $bg_video_url ): ?>
							<div class="videoHolder show-for-large" data-ratio="<?php echo get_post_meta( get_the_ID(), 'video_aspect_ratio', true ) ?: '16:9'; ?>">
								<?php $url_headers = get_headers( $bg_video_url, 1 ); ?>
								<?php if ( strpos( $url_headers['Content-Type'], 'text/html' ) !== false ): ?>
									<div class="video video--embed responsive-embed widescreen">
										<?php echo wp_oembed_get( $bg_video_url, array( 'location' => 'home_slider', 'id' => 'slide-' . get_the_ID() ) ); ?>
									</div>
								<?php elseif ( $url_headers['Content-Type'] == 'video/mp4' || wp_check_filetype( $bg_video_url )['type'] == 'video/mp4' ): ?>
									<video src="<?php echo $bg_video_url; ?>" autoplay preload="none" muted="muted" loop="loop" class="video video--local"></video>
								<?php endif; ?>
							</div>
						<?php endif; ?>
						
						<div class="grid-container slider-caption">
							<div class="grid-x grid-maring-x">
								<div class="cell">
									<h3><?php the_title(); ?></h3>
									<?php the_content(); ?>

                                    <?php
                                    $link = get_field('slide_button');
                                    if( $link ):
                                        $link_url = $link['url'];
                                        $link_title = $link['title'];
                                        $link_target = $link['target'] ? $link['target'] : '_self';
                                        ?>
                                        <a class="button" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>"><?php echo esc_html( $link_title ); ?></a>
                                    <?php endif; ?>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			<?php endwhile; ?>
		</div><!-- END of  #home-slider-->
	<?php endif;
	wp_reset_query(); ?>
<?php }

// HOME Slider Shortcode

function home_slider_shortcode() {
	ob_start();
	home_slider_template();
	$slider = ob_get_clean();
	
	return $slider;
}

add_shortcode( 'slider', 'home_slider_shortcode' );
