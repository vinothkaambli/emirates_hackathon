export type EmployeeI = {
    DateOfJoin: string,
    Enddate: string,
    Grade: string,
    Ccc: string,
    EmployeeName: string,
    RollNo: string,
    Position: string,
    Organisation: string,
    BusinessGroupId: number,
    HiredDate: string,
    IsRetiree: boolean
}

export interface ChildComponent {
    props?: object
}

export interface menuItemsI {
    description: string,
    bgcolor: string
}
