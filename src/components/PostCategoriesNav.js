import React from 'react'
import { Link } from 'gatsby'

import './PostCategoriesNav.css'

const PostCategoriesNav = ({ categories }) => (
  <div className="PostCategoriesNav">
    <Link className="NavLink" to={`/blog/`}>
      All
    </Link>
    {categories.map((category, index) => (
      <Link
        className="NavLink"
        key={category.title + index}
        to={category.slug}
      >
        {category.title}
      </Link>
    ))}
  </div>
)

export default PostCategoriesNav
