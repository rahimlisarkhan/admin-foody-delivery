import { useMemo } from 'react'
import Table from '../../../components/Table'



export const OrderTable = () => {
    const rows = useMemo(()=> [
        { id: "001",  
          customer_id: "022401", 
          time: "25 Dec 2021",
          delivery_address: "29 Eve Street, 543 Evenue Road, Ny 87876 ",
          amount: "249",
          payment: "Cash On Delivery",
          contact: "994-51-410-3130",
         },
         { id: "002",  
         customer_id: "022405", 
         time: "30 Dec 2021",
         delivery_address: "29 Eve Street, 543 Evenue Road, Ny 87876 ",
         amount: "110",
         payment: "Cash On Delivery",
         contact: "994-51-420-5420",
        }
    ],[])

    const columns = useMemo(()=>[
        {
            id: 'id',
            label: 'ID',
            minWidth: 110,
            align: 'center',
        },
        {
            id: 'customer_id',
            label: 'Customer ID',
            minWidth: 120,
            align: 'center',
        },
        {
            id: 'time',
            label: 'Time',
            minWidth: 120,
            align: 'center',
        },
        {
            id: 'delivery_address',
            label: 'Delivery Address',
            minWidth: 130,
            align: 'center',
        },
        {
            id: 'amount',
            label: 'Amount',
            minWidth: 110,
            align: 'center',
        },
        {
            id: 'payment',
            label: 'Payment Method',
            minWidth: 150,
            align: 'center',
        },
        {
            id: 'contact',
            label: 'Contact',
            minWidth: 150,
            align: 'center',
        },
        {
            id: 'delete',
            label: '',
            minWidth: 30,
            align: 'center',
        },
    ],[])

    const deleteItem = (id)=> {
        console.log(id);
    }
    
    return (
        <Table rows={rows} columns={columns} deleteItem={deleteItem}/>
        )
}