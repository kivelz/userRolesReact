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





const ExTable = () => {
  const [getResult, setGetResult] = useState(null);
  const queryClient = useQueryClient();

  const {isLoading, isError, error, data}  = useQuery('query-tutorials', getAllCodes)
  
  console.log(data)

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
        {data.map((product: any) => (
          <TableRow key={product.name}>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {product.CodeId}
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
                    {product.name}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      fontSize: "13px",
                    }}
                  >
                    {product.CodeType}
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {product.Code}
              </Typography>
            </TableCell>
            <TableCell>
            <Typography variant="h6">{product.Name}</Typography>
             
            </TableCell>
            <TableCell align="right">
              <Typography variant="h6">{product.Description}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ExTable;
