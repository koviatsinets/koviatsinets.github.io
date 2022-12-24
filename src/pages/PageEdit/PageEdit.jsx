import React, { useEffect, useState } from 'react'
import { AddProduct } from '../../components/AddProduct/AddProduct'
import { EditProduct } from '../../components/EditProduct/EditProduct'

import './PageEdit.scss';

export const PageEdit = () => {
  return (
    <div className='PageEdit'>
     <AddProduct />
     <EditProduct />
    </div>
  )
}