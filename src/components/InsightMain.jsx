import React from 'react';
const { createElement, render } = wp.element;
export const InsightMain = ({ data, tags }) => {
  if (!data || !tags) {
    return (
      <section className="insight-main">
        <div className="insight-main__wrapper">
          <div className="container">
            <h2
              className="title title_size-l"
              style={{ marginBottom: '100px' }}
            >
              Loading...
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="insight-main">
      <div className="insight-main__wrapper">
        <div className="container">
          <div className="insight-main__note">
            <div className="insight-main__flags">
              <span>
                {tags.map((tag, i, arr) => {
                  let isLast = false;

                  if (i === arr.length - 1) {
                    isLast = true;
                  }

                  return (
                    <React.Fragment key={tag.id}>
                      <a className="link" href={tag.link}>
                        {tag.name}
                      </a>
                      {isLast ? null : ', '}
                    </React.Fragment>
                  );
                })}
              </span>
            </div>
            <h1 className="title title_size-m insight-main__title">
              {data.title.rendered}
            </h1>
            <p>{data.acf.post_top_description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
