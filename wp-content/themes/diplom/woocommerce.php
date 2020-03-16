<?php
/**
 * WooCommerce Page. Shop / Product Category / Single Product view
 */
get_header(); ?>

<main class="main-content">
	<div class="grid-container">
		<div class="grid-x grid-margin-x">
			<!-- BEGIN of page content -->
            <?php if (!is_singular('product')) : ?>
            <div class="cell large-3 product_sidebar ">
                <?php get_sidebar( 'right' ); ?>
            </div>
            <?php endif;?>
            <?php if(is_singular('product')): ?>
            <div class="cell large-12">
                <?php woocommerce_content(); ?>
            </div>
            <?php endif; ?>
            <?php if(!is_singular('product')): ?>
                <div class="cell large-9">
                    <?php woocommerce_content(); ?>
                </div>
            <?php endif; ?>

            <!-- END of page content -->
		</div>
	</div>
</main>

<?php get_footer(); ?>
