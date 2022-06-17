import React, { useState} from "react";
import { useEffect } from "react";
import { sideMenuData } from "../data/sideBarData";
import './MySideBar.css'

function MySideBar(params) {
  
  const [menuItems, setMenuItems] = useState(sideMenuData);
  const [colapsedItems, setColapsedItems] = useState([]);
  const [indexState, setIndexState] = useState(0)
  // const [indexState, setIndexState] = useState()

  // function mapSub(sub){
  //   console.log(sub);
  //   const levels = sub.map((item, index) => item.subMenu.length > 0)
  // }

  function checkSome(index){
    return colapsedItems.some((colapsedItem) => colapsedItem === index)
  }

  function handleColapsed(itemIndex) {
    // Verifica se o botão já está "colapsado"
    setIndexState(itemIndex)
    const colapsed = checkSome(itemIndex)
    if (!colapsed) {
      setColapsedItems([...colapsedItems, itemIndex])
    } else {
      // console.log('ja tem ');
      let filtered = [];
      menuItems.forEach((item, index) => {
        // console.log(index, itemIndex);
        if (index !== itemIndex){
          
          if( colapsedItems.includes(index) ){
            filtered.push(index)  
          }
        } 
      });

      // console.log('filtered', filtered);
      setColapsedItems(filtered)
    }
  }

  function getClassName(itemIndex) {
    
    const colapsed = checkSome(itemIndex)
    if (!colapsed) {
      return 'colapsed';
    } else {
      return 'uncolapsed';
    }
  }

  return (
    <div>
      MySide Bar
      {/* {menuItems.map((menuItem, index) => (<p key={index}>{ menuItem.name }</p>) )} */}
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
              <button key={ item }
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

export default MySideBar