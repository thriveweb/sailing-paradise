import React from 'react'
import _get from 'lodash/get'
import { ICONButtonArrows } from './Icons'
import PostCard from '../components/PostCard'
import './PostSection.css'

class PostSection extends React.Component {
  static defaultProps = {
    posts: [],
    title: '',
    limit: 12,
    showLoadMore: true,
    loadMoreTitle: 'See More',
    perPageLimit: 12
  }

  state = {
    limit: this.props.limit
  }

  increaseLimit = () => {
    this.setState({
      limit: this.state.limit + this.props.perPageLimit
    }, () => {
      var lazyImages = [].slice.call(document.querySelectorAll(".lazy"));

      if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              let lazyImage = entry.target;

              if(lazyImage.dataset.src) {
                if(lazyImage.classList.contains('BackgroundImage')) {
                  lazyImage.style.backgroundImage = `url(${lazyImage.dataset.src})`;
                }  else {
                  lazyImage.src = lazyImage.dataset.src;
                }

                lazyImage.classList.remove("lazy");
                lazyImageObserver.unobserve(lazyImage);
              }
            }
          });
        });

        lazyImages.forEach(function(lazyImage) {
          lazyImageObserver.observe(lazyImage);
        });
      }
    })
  }


  render() {
    const { posts, title, showLoadMore, loadMoreTitle, boatTours } = this.props
    const { limit } = this.state

    const visiblePosts = posts.slice(0, limit || posts.length)

    return (
      <div className={`PostSection ${boatTours ? 'boatTours' : ''}`}>
        {title && <h2 className="PostSection--Title">{title}</h2>}
        {!!visiblePosts.length && (
          <div className="PostSection--Grid">
            {visiblePosts.map((post, index) => {
              const title = _get(post, 'title') || ''
              return <PostCard key={title + index} {...post}/>
            })}
          </div>
        )}
        {showLoadMore &&
          visiblePosts.length < posts.length && (
            <div className="load-more">
              <button className="button" onClick={this.increaseLimit}>
                {loadMoreTitle}
                <ICONButtonArrows />
              </button>
            </div>
          )}
      </div>
    )
  }
}

export default PostSection
