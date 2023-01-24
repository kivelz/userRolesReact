const CodeMasterStyles = (largeScreen: boolean) => {
    return {
      mainContent: {
        backgroundColor: "common.white",
        borderRadius: largeScreen ? 2 : 0,
        padding: 3,
      },
      filter: {
        paddingTop: 3,
        paddingBottom: 3,
      },
      datagrid: {
        width: "100%",
        // "& .datagrid-header": {
        //   backgroundColor: theme.palette.primary.light,
        // },
      },
    };
  };
  
  export { CodeMasterStyles };