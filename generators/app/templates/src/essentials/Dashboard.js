import * as React from "react";
import {Card, CardContent, CardHeader} from "@mui/material";

export default () => (
    <Card>
        <CardHeader title="<%= registry %> Registry"/>
        <CardContent>This is your <b><%= registry %> Registry</b>.</CardContent>
    </Card>
);