import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
// import { useTheme } from "@mui/material/styles";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import {
  AddCircleRounded,
  DeleteRounded,
  EditRounded,
  SearchRounded,
} from "@mui/icons-material";
import { Form, Formik, FormikProps } from "formik";
import { CodeMasterStyles } from "./CodeListStyles";
import { useGetAllCodesByParamsQuery, useGetAllCodesQuery } from "../../features/ codes/codeSlice";

// import { getCodeMasters } from "../services/CodeMasterService";
// import { CodeMasterStyles } from "./CodeMaster/CodeMasterStyles";
// import { CodeMasterModel } from "../model/model";
// import LoadingModal from "../components/LoadingModal/LoadingModal";
interface ICodeList {
  CodeId?: number;
  CodeType: string;
  Code: string;
  Name: string;
  Description?: string;
}
const CodeMaster = () => {
  // const lgMedia = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));

  // const codeMasterStyles = CodeMasterStyles(lgMedia);
  const navigate = useNavigate();
  const {data, isFetching, isError, isSuccess} = useGetAllCodesQuery('CodeApi');
  const [codeMasters, setCodeMasters] = useState([]);
  const [loadingModal, setLoadingModal] = useState({
    open: false,
    content: "",
  });


  const columns: GridColDef[] = [
    {
      field: "CodeType",
      headerName: "Code Type",
      width: 180,
    },
    {
      field: "Code",
      headerName: "Code",
      width: 180,
    },
    {
      field: "Name",
      headerName: "Name",
      width: 250,
    },
    {
      field: "Description",
      headerName: "Description",
      width: 300,
    },
    {
      field: "Action",
      headerName: "",
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => {
        return (
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton onClick={() => handleEditClick(params.row.CodeId)}>
              <EditRounded />
            </IconButton>
            <IconButton>
              <DeleteRounded />
            </IconButton>
          </Stack>
        );
      },
    },
  ];

  useEffect(() => {
    setCodeMasters(data)
    search(CodeType, Code, Name);
  }, [ data]);

  const handleNewClick = () => navigate("/code-master/new");

  const handleEditClick = (id: number) => navigate("/code-master/" + id);

  const handleLoadingModalClose = () =>
    setLoadingModal({ ...loadingModal, open: false });

  
  // const handleDeleteClick = (id)
  const search =  (
    CodeType: string  ,
    Code: string ,
    Name: string
  ) => {

    try {
      const filteredData = data.filter((item: any) => {
        return (
          (item.CodeType.toLowerCase().includes(CodeType.toLowerCase()) ||
            CodeType === "") &&
          (item.Code.toLowerCase().includes(Code.toLowerCase()) || Code === "") &&
          (item.Name.toLowerCase().includes(Name.toLowerCase()) || Name === "")
        );
      });
      setLoadingModal({ open: true, content: "Loading..." });
      setCodeMasters(filteredData)  
      setLoadingModal({ ...loadingModal, open: false });
    } catch (ex: any) {
      if (
        ex.response &&
        ex.response.status >= 400 &&
        ex.response.status < 600
      ) {
        // setShowError({ visible: true, errMessage: ex.response.data });
      }
    }
  };

  return (
    <>
      <Box >
        <Stack direction="row" alignItems="center" mb={1}>
          <Typography variant="h5">Code List</Typography>
          <Stack direction="row" flex="1" justifyContent="flex-end">
            <IconButton onClick={handleNewClick}>
              <AddCircleRounded fontSize="large" />
            </IconButton>
          </Stack>
        </Stack>
        <Divider />
        <Box>
          <Formik<ICodeList>
            initialValues={{ CodeType: "", Code: "", Name: "" }}
            onSubmit={(values) => {
              search(values.CodeType, values.Code, values.Name);
            }}
          >
            {({
              values,

              handleChange,
            }: FormikProps<ICodeList>) => {
              return (
                <Form>
                  <Stack direction={{ xs: "column", lg: "row" }} spacing={2}>
                    <TextField
                      id="CodeType"
                      name="CodeType"
                      label="Code Type"
                      variant="outlined"
                      size="small"
                      inputProps={{ maxLength: 20 }}
                      value={values.CodeType}
                      onChange={handleChange}
                    />
                    <TextField
                      id="Code"
                      name="Code"
                      label="Code"
                      variant="outlined"
                      size="small"
                      value={values.Code}
                      onChange={handleChange}
                      inputProps={{ maxLength: 10 }}
                    />
                    <TextField
                      id="Name"
                      name="Name"
                      label="Name"
                      variant="outlined"
                      size="small"
                      value={values.Name}
                      onChange={handleChange}
                      inputProps={{ maxLength: 50 }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      startIcon={<SearchRounded />}
                    >
                      SEARCH
                    </Button>
                  </Stack>
                </Form>
              );
            }}
          </Formik>
        </Box>
        <Box>
          <DataGrid
            autoHeight
            rows={ codeMasters ? codeMasters: []}
            columns={columns}
            pageSize={100}
            rowsPerPageOptions={[100]}
            disableSelectionOnClick
            disableColumnMenu
            getRowId={(row: any) => row.CodeId}
          />
        </Box>
      </Box>
      {/* <LoadingModal {...loadingModal} onClose={handleLoadingModalClose} /> */}
    </>
  );
};

export default CodeMaster;