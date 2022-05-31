import React from 'react'
import PortfolioList from '../../components/Portfolio/PortfolioList'

type Props = {}

const index = (props: Props) => {
  return (
    <article className="section">
      <h1 className="page-title">Portfolio</h1>
      <PortfolioList />
    </article>
  )
}

export default index