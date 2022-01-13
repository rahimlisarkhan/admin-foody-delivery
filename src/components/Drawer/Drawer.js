import * as React from 'react';
import Drawer from '@mui/material/Drawer';

export const DrawerContent = ({rotate,isOpen,setIsOpen,children}) => {

  return (
          <Drawer
            anchor={rotate}
            open={isOpen}
            onClose={()=>setIsOpen()}
          > 
              {children}
          </Drawer>
  );
}
