<?php
/**
 * Archive
 *
 * Standard loop for the archive page
 */
get_header(); ?>
<main class="main-content">
	<div class="grid-container">
		<div class="grid-x align-center grid-margin-x posts-list">
            <div class="cell small-12">
                <h2 class="page-title page-title--archive"><?php echo get_the_archive_title(); ?></h2>
            </div>
			<!-- BEGIN of Archive Content -->
			<div class="large-8 medium-8 small-12 cell">
				<?php if ( have_posts() ) : ?>
					<?php while ( have_posts() ) : the_post(); ?>
						<?php get_template_part( 'parts/loop', 'post' ); // Post item ?>
					<?php endwhile; ?>
				<?php endif; ?>
				<!-- BEGIN of pagination -->
				<?php foundation_pagination(); ?>
				<!-- END of pagination -->
			</div>
			<!-- END of Archive Content -->
			<!-- BEGIN of Sidebar -->
		</div>
	</div>
</main>


<?php get_footer(); ?>
