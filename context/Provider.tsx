import { Component } from "react"
import { SWRConfig } from "swr";
import React, { createContext, useContext, useState } from "react";
import { EmployeeI } from "../interfaces";

const ApiProvider = (props: any) => {
    return <SWRConfig value={props.options} >
        {props.children}
    </SWRConfig >
}

const employee = {
  'DateOfJoin': 'string',
  'Enddate': 'string',
  'Grade': 'string',
  'Ccc': 'string',
  'EmployeeName': 'string',
  'RollNo': 'string',
  'Position': 'string',
  'Organisation': 'string',
  'BusinessGroupId': 0,
  'HiredDate': 'string',
  'IsRetiree': true
}

export const EmployeeContext : React.Context<EmployeeI> = createContext(employee);

export const EmployeeProvider = (props: any) => {
  return <EmployeeContext.Provider value={props.value}>{props.children}</EmployeeContext.Provider>
}


export default ApiProvider;