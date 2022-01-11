import { useContext } from 'react';
import { ModalsContext } from '../providers/modalsProvider';


export const useModalSetting = () => {
    const setting = useContext(ModalsContext)
    return setting
}
