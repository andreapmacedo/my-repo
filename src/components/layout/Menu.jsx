import './Menu.css'
import React from 'react'

import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav id="tree">
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/Componentes">Componentes</Link>
                    <ul>
                      <li>
                        menu
                        <ul>
                          <li>
                            topmenu
                            submenu
                          </li>
                        </ul>
                      </li>
                    </ul>
                </li>
                <li>
                    <Link to="/logica">Logica</Link>
                </li>
                <li>
                    <Link to="/myMenu">Meu Menu</Link>
                </li>
                <li>
                    <Link to="/frameworks">Frameworks</Link>
                </li>
                <li>
                    <Link to="/useCallback">useCallback()</Link>
                </li>
                <li>
                    <Link to="/useContext">useContext()</Link>
                </li>
                <li>
                    {/* <Link to="/useReducer">useReducer()</Link> */}
                </li>
                <li>
                    <Link to="/useCustom">useMyHook()</Link>
                  <ul>
                    <Link to="/useCustom">useMyHook()</Link>
                    <Link to="/useCustom">useMyHook()</Link>

                  </ul>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu