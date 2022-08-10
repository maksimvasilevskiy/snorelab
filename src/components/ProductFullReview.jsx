const { createElement, render, useEffect } = wp.element;
import usePost from '../hooks/usePost';
import useFetch from '../hooks/useFetch';
import mouthpiece from '../images/mouthpiece.png';

export const ProductFullReview = ({product}) => {

  const post = usePost(
    'https://snorelab.ux-mind.pro/wp-json/wp/v2/posts?per_page=100',
    product.data.acf.product_full_review_post.post_name,
    {}
  );
  useEffect(() => {
    console.log('post');
    console.log(post);
  }, [post]);
  const tags = useFetch('https://snorelab.ux-mind.pro/wp-json/wp/v2/categories?per_page=100', {});

  return (
    <section className="product-full-review">
      <div className="container">
        <div className="product-full-review__subscript">
          {product.data.acf.product_full_review_title}
        </div>
        {post.data ?
        <a
          href={post.data.link}
          className="product-full-review-wrapper"
        >
          <div className="product-full-review__left-block">
            <div className="product-full-review__tags">
              {tags.data ? post.data.categories.map((tag, i, arr) => {
                const tagData = tags.data.find(
                  (item) => item.id === tag
                );

                if (!tagData) {
                  return null;
                }

                return (
                  <span key={tagData.id}>
                    <a
                      className="link"
                      href={'/insights/?category='+tagData.slug}
                      dangerouslySetInnerHTML={{
                        __html: tagData.name,
                      }}
                    ></a>
                    {i === arr.length - 1 ? '' : ' , '}
                  </span>
                );
              }) : ''}
            </div>
            <div className="product-full-review__title"
            dangerouslySetInnerHTML={{
              __html: post.data.title.rendered,
            }}></div>
          </div>
          <div className="product-full-review__center-block"
          dangerouslySetInnerHTML={{
            __html: post.data.excerpt.rendered,
          }}></div>
          <div
          className="product-full-review__right-block"
          style={{
            background: `url(${post.data.fimg_url}) no-repeat center center / cover`
          }}
          ></div>
        </a> : ''}
      </div>
    </section>
  );
};
