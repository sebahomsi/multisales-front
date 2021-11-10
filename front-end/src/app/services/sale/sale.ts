import { customer } from "../customer/customer";
import { employee } from "../employee/employee";
import { store } from "../store/store";

export interface sale{
    date: Date;
    storeId: number;
    employeeId:number;
    employee: employee;
    customerId:number;
    customer: customer;
    store:store;
    //List<SaleDetailDTO> SaleDetails { get; set; }
}