import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {CreateProjectForm} from "./CreateProjectForm";
import {useFormik} from "formik";

export const CreateDialog = (props) => {
    const {open, handleSubmit, handleClose} = props;

    const formik = useFormik({
        initialValues: {
            projectName: '',
            projectDescription: '',
            isPersonal: true,
        },
        onSubmit: (values) => {
            return handleSubmit(values);
        },
    });

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Create new project</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>
                <CreateProjectForm
                    values={formik.values}
                    handleChange={formik.handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={formik.handleSubmit} color="primary">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
};
