import React from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseState = (props) => {
  return (
    <div className="Componentes">
      <PageTitle
        title="Componentes"
        subtitle="Componentes da página"
      />
      <div>
        conteudo da página:
        <div>
          <a 
            href="https://www.youtube.com/watch?v=-VQPimwkstM"
            target="_blank" rel="noreferrer"
          >
            Menu com submenu
          </a>
        </div>
      </div>
    </div>
  )
}

export default UseState
