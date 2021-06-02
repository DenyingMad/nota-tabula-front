import {TextField} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import React from "react";

export const CreateProjectForm = (props) => {
    const {values, handleChange} = props;

    return (
        <div>
            <form>
                <TextField
                    id="project_name"
                    name="projectName"
                    label="Project Name"
                    variant="outlined"
                    type="text"
                    size="small"
                    value={values.projectName}
                    onChange={handleChange}
                    fullWidth
                    margin="dense"
                />
                <TextField
                    id="project_description"
                    name="projectDescription"
                    label="Project Description"
                    variant="outlined"
                    type="text"
                    size="small"
                    value={values.projectDescription}
                    onChange={handleChange}
                    fullWidth
                    margin="dense"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={values.isPersonal}
                            name="personalCheckmark"
                            color="primary"
                        />
                    }
                    label={
                        <Typography variant="caption">
                            Personal project
                        </Typography>
                    }
                />
            </form>
        </div>
    );
};
