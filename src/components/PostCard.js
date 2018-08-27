import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import _map from 'lodash/map'
import _format from 'date-fns/format'

import Image from './Image'
import './PostCard.css'

const PostCard = ({
  featuredImage,
  title,
  date,
  slug,
  categories = [],
  className = '',
  ...props
}) => 


  <Link to={slug} className={`PostCard ${className}`}>
    {featuredImage && (
      <div className="PostCard--Image relative">
        <Image background src={featuredImage} alt={title} />
      </div>
    )}
    <div className="PostCard--Content">
      <div className="SinglePost--Meta">
        {date && (
          <time
            className="SinglePost--Meta--Date"
            itemProp="dateCreated pubdate datePublished"
            date={date}
          >
            {_format(date, 'D.MM.YYYY')}
          </time>
        )}
        {categories.length && (
          <Fragment>
            <span>|</span>
            {categories.map((cat, index) => (
              <span key={cat.category} className="SinglePost--Meta--Category">
                {cat.category}
                {/* Add a comma on all but last category */}
                {index !== categories.length - 1 ? ',' : ''}
              </span>
            ))}
          </Fragment>
        )}
      </div>
      {title && <h3 className="PostCard--Title">{title}</h3>}
    </div>
  </Link>

export default PostCard
