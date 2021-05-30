import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "@material-ui/core/Link";
import {ListItemText} from "@material-ui/core";

export const DashboardView = (props) => {
    const {personalProjects, orgProjects} = props;
    return (
        <div>
            <Typography>Dashboard</Typography>
            <Button>Add Project</Button>
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
                <List>
                    {orgProjects.map((project) => (
                        <ListItem key={project.projectId}>
                            <p>{project.projectName}</p>
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
    );
};
