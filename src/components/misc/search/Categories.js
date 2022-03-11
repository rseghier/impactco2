import React, { useContext } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

import DataContext from 'utils/DataContext'
import Category from './categories/Category'

const Wrapper = styled.div`
  max-width: 21rem;
  margin: 0 auto;
`
export default function Categories() {
  const { categories, currentCategory, setCurrentCategory } =
    useContext(DataContext)

  return categories && currentCategory ? (
    <Wrapper>
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        initialSlide={categories.findIndex(
          (category) => category.id === currentCategory.id
        )}
        afterChange={(index) => setCurrentCategory(categories[index])}
      >
        {categories.map((category) => (
          <Category category={category} key={category.id} />
        ))}
      </Slider>
    </Wrapper>
  ) : null
}
