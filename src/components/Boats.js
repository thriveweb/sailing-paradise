import React from 'react'

import Image from './Image'
import Content from './Content'
import GallerySlider from './GallerySlider'
import Video from './Video'

import './Boats.css'

export default ({ boats }) => {
  if (!boats) return null

  return (
    <section className="boats-listing">
      {boats.map(
        (
          {
            title,
            featuredImage,
            description,
            boatFeatures,
            gallery,
            videoSection
          },
          index
        ) => {
          return (
            <div className="boat" key={`boat-${index}`}>
              <div className="container">
                {title && <h3>{title}</h3>}
                <div className="colLeft column">
                  {featuredImage &&
                    <div
                      style={{
                        backgroundImage: `url(${`${featuredImage}-/resize/100x/`})`,
                        backgroundSize: 'cover'
                      }}
                      data-src={`${featuredImage}-/resize/700/`}
                      className='BackgroundImage absolute lazy'
                    >
                    </div>
                  }
                  {description && <Content src={description} />}
                </div>
                {boatFeatures && (
                  <div className="colRight column">
                    <h4>Features</h4>
                    {boatFeatures.map(({ content }, index) => {
                      return <Content src={content} key={index} />
                    })}
                  </div>
                )}
              </div>
              {gallery && <GallerySlider gallery={gallery} />}
              {videoSection && <Video {...videoSection} />}
            </div>
          )
        }
      )}
    </section>
  )
}
