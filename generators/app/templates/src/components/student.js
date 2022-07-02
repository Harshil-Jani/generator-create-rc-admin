import * as React from "react";
import {   List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    useRecordContext, EmailField} from "react-admin";

const StudentTitle = () => {
    const record = useRecordContext();
    return <span>{record ? `${record.name}` : ''}</span>;
};

const StudentFilter = [
    <TextInput source="q" label="Search Student" alwaysOn/>,   
]

export const StudentList = () => {
    return <List filters={StudentFilter}>
        <Datagrid>
            <TextField source="name"/>
            <EmailField source="email"/>
            <TextField source="phoneNumber"/>
            <TextField source="school"/>
            <EditButton/>
        </Datagrid>
    </List>
}

export const StudentEdit = () => (
     <Edit title={<StudentTitle/>}>
        <SimpleForm>
            <TextInput source="id"/>
            <TextInput source="name"/>
            <TextInput source="email"/>
            <TextInput source="school" disabled/>
        </SimpleForm>
    </Edit>
)

export const StudentCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="email"/>
            <TextInput source="name"/>
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);
