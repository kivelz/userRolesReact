import { Card, CardContent, Box, Typography } from "@material-ui/core";
import UsefulContactsProject from "./usefulContactsComponent/showAllProjects";

const BasicTable = () => {
  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h3">Basic Table</Typography>
          <Box
            sx={{
              overflow: {
                xs: "auto",
                sm: "unset",
              },
            }}
          >
            <UsefulContactsProject />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BasicTable;
