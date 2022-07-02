import * as React from "react";
import {   List,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    useRecordContext, EmailField
} from "react-admin";

const TeacherTitle = () => {
    const record = useRecordContext();
    return <span>{record ? `${record.name}` : ''}</span>;
};

export const TeacherList = () => {
    return <List>
        <Datagrid>
            <TextField source="name"/>
            <EmailField source="email"/>
            <TextField source="phoneNumber"/>
            <TextField source="school"/>
            <TextField source="subjects[1]" label="Subject"/>
            <EditButton/>
        </Datagrid>
    </List>
}

export const TeacherEdit = () => (
     <Edit title={<TeacherTitle/>}>
        <SimpleForm>
            <TextInput source="id"/>
            <TextInput source="name"/>
        </SimpleForm>
    </Edit>
)

export const TeacherCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="email"/>
            <TextInput source="name"/>
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);
