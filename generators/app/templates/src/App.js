import * as React from "react";
import { Admin, Resource,fetchUtils} from "react-admin";
import Dashboard from "./essentials/Dashboard";
import authProvider from "./essentials/authProvider";
import dataProvider from "./essentials/dataProvider";
import './app.css';
import {StudentList ,StudentEdit, StudentCreate} from "./components/student";
import {TeacherList, TeacherCreate, TeacherEdit} from "./components/teacher";
import {InstituteCreate, InstituteList, InstituteEdit} from "./components/institute";

function App() {
  const endpoints_array = "<%=endpoints%>".split(",");

  const list_components = {
    "student" : StudentList,
    "teacher" : TeacherList,
    "institute" : InstituteList
  }
  const edit_components = {
    "student" : StudentEdit,
    "teacher" : TeacherEdit,
    "institute" : InstituteEdit
  }
  const create_components = {
    "student" : StudentCreate,
    "teacher" : TeacherCreate,
    "institute" : InstituteCreate
  }

  return (
  <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
    {endpoints_array.map((item, index) => {
      console.log(item[0].toUpperCase()+item.slice(1));
      return <Resource name={item} key={index} list={list_components[`${item}`]} create={create_components[`${item}`]} edit={edit_components[`${item}`]}/>
})}
  </Admin>)
}

export default App;
