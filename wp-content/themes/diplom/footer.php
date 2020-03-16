<?php
/**
 * Footer
 */
$title_about_us = get_field('title_about_us', 'options');
$about_us = get_field('about_us', 'options');
$title_social_links = get_field('title_social_links', 'options');
$title_email = get_field('title_email', 'options');
$email = get_field('email', 'options');
$title_phone = get_field('title_phone', 'options');
$phone = get_field('phone', 'options');
$title_address = get_field('title_address', 'options');
$address = get_field('address', 'options');
$title_our_contacts = get_field('our_contacts', 'options');
?>
<!-- BEGIN of footer -->
<footer class="footer">
    <div class="grid-container">
        <div class="grid-x grid-margin-x align-center footer-padding">
            <div class="about-us cell large-4 medium-6 small-12">
                <?php if ($title_about_us) : ?>
                    <h2><?php echo $title_about_us ?></h2>
                <?php endif; ?>
                <div class="about-us-content">
                    <?php if ($title_about_us) :
                        echo $about_us;
                    endif; ?>
                </div>
            </div>
            <div class="title-social large-4 medium-6 small-12">
                <?php if ($title_social_links) : ?>
                    <h2 class="text-center"><?php echo $title_social_links ?></h2>
                <?php endif; ?>
                <div class="social-links">
                    <?php if (have_rows('socials', 'options')): ?>
                        <ul class="stay-tuned">
                            <?php while (have_rows('socials', 'options')): the_row(); ?>
                                <li class="stay-tuned__item">
                                    <a class="stay-tuned__link " href="<?php the_sub_field('link'); ?>"
                                       target="_blank" rel="noopener"
                                       aria-label="<?php the_sub_field('social_networks'); ?>">
                                        <span class="fab fa-<?php the_sub_field('social_networks'); ?>"></span>
                                    </a>
                                </li>
                            <?php endwhile; ?>
                        </ul>
                    <?php endif; ?>
                </div>
            </div>
            <div class="footer-info large-4 medium-6">
                <?php if ($title_our_contacts) : ?>
                    <h2><?php echo $title_our_contacts ?></h2>
                <?php endif; ?>
                <?php if ($title_email) : ?>
                    <p><?php echo $title_email; ?>
                        <span>
                                    <?php echo $email; ?>
                                </span>
                    </p>
                <?php endif; ?>
                <?php if ($title_phone) : ?>
                    <p><?php echo $title_phone; ?>
                        <span>
                                    <?php echo $phone; ?>
                            </span>
                    </p>
                <?php endif; ?>
                <?php if ($title_address) : ?>
                    <p><?php echo $title_address; ?>
                        <span>
                                    <?php echo $address; ?>
                                </span>
                    </p>
                <?php endif; ?>
            </div>
            <div class="medium-12 small-12 cell">
                <div class="footer-menu">
                    <?php
                    if (has_nav_menu('footer-menu')) {
                        wp_nav_menu(array('theme_location' => 'footer-menu', 'menu_class' => 'footer-menu', 'depth' => 1));
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- END of footer -->
<?php wp_footer(); ?>
</body>
</html>
