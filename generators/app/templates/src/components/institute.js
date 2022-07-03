import * as React from "react";
import { List,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    useRecordContext, 
    UrlField
} from "react-admin";

const InstituteTitle = () => {
    const record = useRecordContext();
    return <span>{record ? `${record.name}` : ''}</span>;
};

export const InstituteList = () => {
    return <List>
        <Datagrid>
            <TextField source="instituteName"/>
            <TextField source="address"/>
            <TextField source="establishmentYear"/>
            <UrlField source="website"/>
            <TextField source="contactNumber"/>
            <EditButton/>
        </Datagrid>
    </List>
}

export const InstituteEdit = () => (
     <Edit title={<InstituteTitle/>}>
        <SimpleForm>
            <TextInput source="instituteName"/>
            <TextInput source="address"/>
            <TextInput source="establishmentYear"/>
            <TextInput source="contactNumber"/>
        </SimpleForm>
    </Edit>
)

export const InstituteCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="instituteName"/>
            <TextInput source="address"/>
            <TextInput source="establishmentYear"/>
            <TextInput source="contactNumber"/>
            <TextInput source="gstId"/>
            <TextInput source="email"/>
            <TextInput source="website"/>
            <TextInput source="catagory"/>
        </SimpleForm>
    </Create>
);
