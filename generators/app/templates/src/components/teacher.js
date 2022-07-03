import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    useRecordContext, 
    EmailField, 
    SimpleFormIterator, 
    ArrayField, 
    SingleFieldList, 
    ChipField, 
    ArrayInput
} from "react-admin";

const TeacherTitle = () => {
    const record = useRecordContext();
    return <span>{record ? `${record.name}` : ''}</span>;
};

export const TeacherList = () => {
    return <List>
        <Datagrid >
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phoneNumber" />
            <TextField source="school" />
            <ArrayField source="subjects">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ArrayField>
            <EditButton />
        </Datagrid>
    </List>
}

export const TeacherEdit = () => (
    <Edit title={<TeacherTitle />}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="phoneNumber" />
            <TextInput source="school" disabled />
            <ArrayInput source="subjects">
                <SimpleFormIterator>
                    <TextInput source="name" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
)

export const TeacherCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="phoneNumber"/>
            <ArrayInput source="subjects">
                <SimpleFormIterator>
                    <TextInput source="name" />
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput source="school" label="NIT Surat" disabled/>
        </SimpleForm>
    </Create>
);
