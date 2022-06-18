import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import MySideBar from '../../components/MySubMenu02'

const MyMenu = (props) => {
    return (
        <div className="MyMenu">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <MySideBar />
        </div>
    )
}

export default MyMenu
