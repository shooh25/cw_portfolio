import React from 'react'
import { Helmet } from 'react-helmet-async'

type Props = {
  title?: string;
  description?: string;
}

const HeadBlock: React.FC<Props> = ({ title, description }) => {

  const defaultContents = {
    title: 'KUBOSYOH | Portfolio',
    description: 'フリーランスのデザイナー/エンジニアとして活動している、Kubosyohと申します。中小企業様、個人事業主様を中心に、ウェブ制作/開発を行っております。'
  }

  return (
    <Helmet>
      <title>{title ? `${title} | ${defaultContents.title}` : defaultContents.title}</title>
      <meta name="description" content={description || defaultContents.description} />
    </Helmet>
  )
}

export default HeadBlock