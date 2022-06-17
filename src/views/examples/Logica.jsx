import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import Sidebar from '../../components/Sidebar';


const Logica = (props) => {
  return (
    <div className="UseReducer">
      <PageTitle
          title="Hook UseReducer"
          subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <Sidebar />
    </div>
  )
}

export default Logica
