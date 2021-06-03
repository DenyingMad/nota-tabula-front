import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "@material-ui/core/Link";
import {ListItemText} from "@material-ui/core";
import {CreateDialog} from "../../components/project/CreateDialog";

export const DashboardView = (props) => {
    const {
        personalProjects,
        orgProjects,
        openCreateDialog,
        handleOpenCreateForm,
        handleCloseCreateForm,
        handleSubmitCreateForm
    } = props;

    return (
        <div>
            <Typography variant="h3">Dashboard</Typography>
            <Button variant="outlined" color="primary" onClick={handleOpenCreateForm}>Create Project</Button>
            <CreateDialog
                open={openCreateDialog}
                handleSubmit={handleSubmitCreateForm}
                handleClose={handleCloseCreateForm}
            />
            <div>
                <Typography>My Projects</Typography>
                <List>
                    {personalProjects.map((project) => (
                        <Link
                            href={`/project/${project.projectId}`}
                            key={project.projectId}
                        >
                            <ListItem key={project.projectId}>
                                <ListItemText primary={project.projectName} secondary="Personal project"/>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </div>
            <div>
                <Typography>Org. Projects</Typography>
                <Typography>This feature coming soon</Typography>
            </div>
        </div>
    );
};
