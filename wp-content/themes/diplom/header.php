<?php
/**
 * Header
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<!-- Set up Meta -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	
	<!-- Set the viewport width to device width for mobile -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
	<!-- Remove Microsoft Edge's & Safari phone-email styling -->
	<meta name="format-detection" content="telephone=no,email=no,url=no">
	
	<!-- Add external fonts below (GoogleFonts / Typekit) -->
    <link href="https://fonts.googleapis.com/css?family=Merriweather:300,400,400i,700,700i|Montserrat:300,300i,400,600,700,700i&display=swap" rel="stylesheet">


    <?php wp_head(); ?>
</head>

<body <?php body_class('no-outline'); ?>>
<?php wp_body_open(); ?>

<!-- <div class="preloader hide-for-medium">
	<div class="preloader__icon"></div>
</div> -->

<script type='text/javascript' data-cfasync='false'>window.purechatApi = { l: [], t: [], on: function () { this.l.push(arguments); } }; (function () { var done = false; var script = document.createElement('script'); script.async = true; script.type = 'text/javascript'; script.src = 'https://app.purechat.com/VisitorWidget/WidgetScript'; document.getElementsByTagName('HEAD').item(0).appendChild(script); script.onreadystatechange = script.onload = function (e) { if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) { var w = new PCWidget({c: '9c3f1400-06cb-4bf1-821c-52d6daeae84e', f: true }); done = true; } }; })();</script>

<!-- BEGIN of header -->
<header class="header<?php echo (!is_front_page()) ? " other-pages" : null;?>">
	<div class="grid-container menu-grid-container">
		<div class="grid-x grid-margin-x">
			<div class="logo-container medium-2 small-12 cell show-for-large">
				<div class="logo text-center medium-text-left">
                    <?php the_custom_logo(); ?>
				</div>
			</div>
			<div class="large-10 cell">
				<?php if ( has_nav_menu( 'header-menu' ) ) : ?>
					<div class="title-bar hide-for-large" data-responsive-toggle="main-menu" data-hide-for="large">
						<button class="menu-icon" type="button" data-toggle aria-label="Menu" aria-controls="main-menu"><span></span></button>
						<div class="title-bar-title">Menu</div>
					</div>
					<nav class="top-bar" id="main-menu">
						<?php wp_nav_menu( array(
							'theme_location' => 'header-menu',
							'menu_class'     => 'menu header-menu',
							'items_wrap'     => '<ul id="%1$s" class="%2$s" data-responsive-menu="accordion large-dropdown" data-submenu-toggle="true" data-multi-open="false" data-close-on-click-inside="false">%3$s</ul>',
							'walker'         => new Foundation_Navigation()
						) ); ?>
					</nav>
				<?php endif; ?>
			</div>
		</div>
	</div>
</header>
<!-- END of header -->
