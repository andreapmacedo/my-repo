import React, { useState} from "react";
import { useEffect } from "react";
import { sideMenuData } from "../data/sideBarData";
import './MySideBar.css'

function MySubMenu01(params) {
  
  const [menuItems, setMenuItems] = useState(sideMenuData);
  const [collapsedItems, setColapsedItems] = useState([]);
  const [indexState, setIndexState] = useState(0)


  function checkSome(index){
    return collapsedItems.some((collapsedItem) => collapsedItem === index)
  }

  function handleColapsed(itemIndex) {
    // Verifica se o botão já está "colapsado"
    setIndexState(itemIndex)
    const collapsed = checkSome(itemIndex)
    if (!collapsed) {
      setColapsedItems([...collapsedItems, itemIndex])
    } else {
      let filtered = [];
      menuItems.forEach((item, index) => {
        if (index !== itemIndex){ 
          if( collapsedItems.includes(index) ){
            filtered.push(index)  
          }
        } 
      });
      setColapsedItems(filtered)
    }
  }

  function getClassName(itemIndex) {
    
    const collapsed = checkSome(itemIndex)
    if (!collapsed) {
      return 'collapsed';
    } else {
      return 'uncollapsed';
    }
  }


  const table = document.createElement("ul");
  function hasNoede(menuItems){
    
    menuItems.forEach((item) => {
      console.log('sub',item.name);
      
      const node = document.createElement("li");
      const textnode = document.createTextNode(item.name);
      node.appendChild(textnode);
      // table.appendChild(node)
      table.appendChild(textnode)
      if( item.subMenu.length > 0) {
        hasNoede(item.subMenu)
      } 
    })
    // return node.innerHTML
    return table.innerHTML
  }

  // function hasNoede(menuItems){
  //   // let count = 0;
  //   menuItems.forEach((item) => {
  //     console.log('sub',item.name);
  //     // console.log('count :', count++);
  //     const node = document.createElement("li");
  //     const textnode = document.createTextNode(item.name);
  //     node.appendChild(textnode);
  //     // table.appendChild(node)
  //     table.appendChild(textnode)
  //     if( item.subMenu.length > 0) {
  //       hasNoede(item.subMenu)
  //     } 
  //   })
  //   // return node.innerHTML
  //   return table.innerHTML
  // }




  return (
    <div>
      MySide Bar
      {/* {menuItems.map((menuItem, index) => (<p key={index}>{ menuItem.name }</p>) )} */}
      <div >
        {hasNoede(menuItems)}
      </div>
      
      {menuItems.map((menuItem, index) => (
      <div
        key={index}
        className="accordion"
      >
        <div className="panel">
          <button
            className={ getClassName(index) }
            onClick={() => handleColapsed(index)}
          >
            { menuItem.name }
          </button>
        </div>
        <div>
          {/* TODO: criar uma func que vai recorrentemente verificando cada novo submenu */}
          {(menuItem.subMenu.length > 0 && checkSome(index)) &&
            (menuItem.subMenu.map((item)  =>
              <button key={ item.name }
                // onClick={() => handleColapsed(index)}
              >{ item.name }</button>
            ))
          }
        </div>
      </div>) )}
      <button
        // onClick={setCss}
      >
        setCss
      </button>
    </div>
  )
}

export default MySubMenu01