import * as React from "react";
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from "office-ui-fabric-react/lib/TextField";

export class Form extends React.Component<any ,any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="blog">
                <TextField className="field" label="Street" maxLength={80}  />
                <TextField className="field" label="City" maxLength={80} />
                <DefaultButton 
                    className="button"
                    description="Save" 
                    iconProps={{ iconName: "Cat" }} 
                    text="Save"
                />
            </div> 
        );
    }
}
