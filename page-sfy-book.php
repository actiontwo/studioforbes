<?php
/**
 * Template Name: Full-width Page Template, No Sidebar
 *
 * Description: Twenty Twelve loves the no-sidebar look as much as
 * you do. Use this page template to remove the sidebar from any page.
 *
 * Tip: to remove the sidebar from all posts and pages simply remove
 * any active widgets from the Main Sidebar area, and the sidebar will
 * disappear everywhere.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
get_header();
?>
<div id="primary" class="full-width">
    <div id="content" role="main">

        <?php while (have_posts()) : the_post(); ?>
            <?php get_template_part('content', 'page'); ?>
            <?php comments_template('', true); ?>
        <?php endwhile; // end of the loop. ?>
        <ul class="bxslider">              
            <?php
            $query = array(
              'category_name' => 'sfybook',
              'posts_per_page' => 4
            );

            query_posts($query);

            while (have_posts()) : the_post();
                $url = wp_get_attachment_url(get_post_thumbnail_id($post->ID));
                ?>
                <li>
                    <img src="<?php echo $url; ?>">
                    <?php the_content() ?>
                </li>
            <?php endwhile; ?>
        </ul>

    </div><!-- #content -->
</div><!-- #primary -->

<?php get_footer(); ?>