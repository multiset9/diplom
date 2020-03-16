<?php
/**
 * Template Name: Home Page
 */
get_header(); ?>

    <!--HOME PAGE SLIDER-->
<?php home_slider_template(); ?>
    <!--END of HOME PAGE SLIDER-->

    <!-- BEGIN of main content -->
    <div class="grid-container">
        <div class="grid-x grid-margin-x">
            <div class="cell">
                <div class="out_products">
                    <h2 class="title_block"><?php the_field('title_block'); ?></h2>
                    <p class="content"><?php the_field('content'); ?></p>
                </div>
            </div>
        </div>
    </div>
<?php $bg_about_us = get_field('background_about_us'); ?>
    <div class="bg_about_us" id="about_us" <?php $bg_about_us ? bg($bg_about_us['url'], 'full_hd') : null ?>>
        <div class="grid-container">
            <div class="grid-x">
                <div class="content-about_us">
                    <h2 class="title_about_us"><?php the_field('title_about_us'); ?></h2>
                    <?php if (have_rows('our_qualities')): ?>
                        <div class="grid-x grid-padding-x block-qualities">
                            <?php while (have_rows('our_qualities')): the_row();
                                $image = get_sub_field('image_qualities');
                                $title = get_sub_field('title_qualities');
                                $content = get_sub_field('content_qualities'); ?>
                                <div class="qualities cell medium-4">
                                    <div class="image_qual"><img src="<?php echo $image['url']; ?>"
                                                                 alt="<?php echo $image['alt'] ?>"/>
                                        <h3><?php echo $title; ?></h3>
                                    </div>
                                    <div class="content_qual"><?php echo $content; ?></div>
                                </div>
                            <?php endwhile; ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>

    <section class="product-slider">
        <div class="grid-container">
            <div class="grid-x">
                <div class="cell">
                    <?php echo do_shortcode('[woo_product_slider id="250"]'); ?>
                </div>
            </div>
        </div>
    </section>

<?php $image = get_field('background_image'); ?>
    <div class="image" id="service" <?php $image ? bg($image['url'], 'full_hd') : null ?>>
        <div class="grid-container">
            <div class="grid-x">
                <div class="filter">
                    <div class="section-content">
                        <h2 class="title-service"><?php the_field('service'); ?></h2>
                        <div class="grid-x service-content">
                            <div class="cell large-7 medium-12 small-12">
                                <div class="service-text">
                                    <?php the_field('service_content'); ?>
                                </div>
                            </div>
                            <div class="cell large-5 medium-12 small-12">
                                <div class="form-content">
                                    <?php if ($form = get_field('form')): ?>
                                        <?php echo do_shortcode('[gravityform id="' . $form['id'] . '" title="true" description="false" ajax="true"]'); ?>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- END of main content -->
<!-- RECENT POSTS-->
<?php
$lastposts = get_posts( array(
    'posts_per_page' => 3
) ); ?>
    <div class="grid-container">
        <div class="grid-x">
            <div class="recent-content">
                <h2 class="title_last_news"><?php the_field('last_news'); ?></h2>
                    <div class="grid-x grid-padding-x">
                            <?php if ( $lastposts ) {
                            foreach ( $lastposts as $post ) :
                                setup_postdata( $post ); ?>
                            <div class="cell medium-4 recent-post">
                                <?php echo get_the_post_thumbnail($post->ID, 'large'); ?>
                                <h2 class="preview__title title-home"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                                <div class="preview__excerpt">
                                   <?php the_content('Read more...'); ?>
                               </div>
                            </div>
                            <?php
                            endforeach;
                            wp_reset_postdata();
                        }
                        ?>

                    </div>
            </div>
        </div>
    </div>

<!--Section client's comments-->
<?php
$args = array ('post_type' => 'product');
$comments = get_comments( $args ); ?>

<?php $bg_testimonials = get_field('background_testimonials'); ?>
<div class="bg_about_us" <?php $bg_testimonials ? bg($bg_testimonials['url'], 'full_hd') : null ?>>
<div class="grid-container">
    <div class="grid-x">
        <div class="cell">
            <div class="block-testimonials">
                <div class="our_clients">
                    <h2 class="title-service"><?php the_field('testimonial_title'); ?></h2>
                    <p class="content-testimonials"><?php the_field('testimonial_describe'); ?></p>
                </div>
                <div class="slider-comments text-center">
                    <?php
                    wp_list_comments( array( 'callback' => 'woocommerce_comments' ), $comments);
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

<?php get_footer(); ?>