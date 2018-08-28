import React from 'react'


export const SingleCrewMemberTemplate = () => {
  return <div>Nothing to see here</div>
}

// Export Default SinglePost for front-end
const SingleCrewMember = ({ post }) => {
  return (
    <SingleCrewMemberTemplate
      {...post}
    />
  )
}

export default SingleCrewMember

export const pageQuery = graphql`
  ## Query for SingleCrewMember data
  query SingleCrewMember($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      html
    }
  }
`
