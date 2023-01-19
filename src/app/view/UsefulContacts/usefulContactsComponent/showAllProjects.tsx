import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@material-ui/core";

import { useDispatch } from "react-redux";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { config } from "../../../../config";
import Code from "../../../types/code";
import CodeService from "../../../services/codeServices";
import { getAllCodes } from "../../../domain/usecases/general/code";
import { codeApi, useGetAllCodesQuery } from "../../../features/ codes/codeSlice";



const products = [
  {
    id: "1",
    name: "Sunil Joshi",
    post: "Web Designer",
    pname: "Elite Admin",
    priority: "Low",
    pbg: "primary.main",
    budget: "3.9",
  },
  {
    id: "2",
    name: "Andrew McDownland",
    post: "Project Manager",
    pname: "Real Homes WP Theme",
    priority: "Medium",
    pbg: "secondary.main",
    budget: "24.5",
  },
  {
    id: "3",
    name: "Christopher Jamil",
    post: "Project Manager",
    pname: "MedicalPro WP Theme",
    priority: "High",
    pbg: "error.main",
    budget: "12.8",
  },
  {
    id: "4",
    name: "Nirav Joshi",
    post: "Frontend Engineer",
    pname: "Hosting Press HTML",
    priority: "Critical",
    pbg: "success.main",
    budget: "2.4",
  },
];

const ExTable = () => {
  const [getResult, setGetResult] = useState<[] | Code[]>([]);
  const {data} = useGetAllCodesQuery('codeApi')
  console.log('data', data)
 

  return (

    <Table
      aria-label="simple table"
      sx={{
        mt: 3,
        whiteSpace: "nowrap",
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Id
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Type
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Code
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
             Name
            </Typography>
          </TableCell>
          <TableCell align="right">
            <Typography color="textSecondary" variant="h6">
              Description
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        { getResult.map((data: any) => (
          <TableRow key={data.CodeId}>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {data.CodeId}
              </Typography>
            </TableCell>
            <TableCell>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {data.CodeType}
                  </Typography>
                
                </Box>
              </Box>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {data.Code}
              </Typography>
            </TableCell>
            <TableCell>
            
              <Typography variant="h6">{data.Name}</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h6">{data.Description}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ExTable;
