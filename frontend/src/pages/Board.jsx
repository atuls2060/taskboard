import React, { useContext, useEffect, useState } from 'react'
import Styles from "./board.module.css"
import { ListContext } from '../Contexts/ListContext';
import Navbar from '../components/Navbar'
import List from '../components/List';
import AddList from '../components/AddList';

const Board = () => {
  const { list, getList } = useContext(ListContext)

  useEffect(() => {
    getList()
  }, [])
  return (
    <>
      <Navbar />
      <div className={Styles.list_container}>
        <div className={Styles.list}>
          {
            list.map((item, idx) => {
              return <List key={idx} {...item} />
            })
          }
        </div>
        <AddList />
      </div>
    </>
  )
}

export default Board