import { createTheme } from "@material-ui/core/styles";
import { esES } from "@material-ui/core/locale";

export const MaterialUITheme = createTheme(
  {
    palette: {
      primary: {
        main: "#000000"
      }
    },
    typography: {
      fontSize: 20,
      fontFamily: "inherit"
    },
    overrides: {
      MuiBackdrop: {
        root: {
          position: "absolute"
        }
      },
      MuiFormHelperText: {
        root: {
          overflow: "hidden",
          textOverflow: "ellipsis"
        }
      },
      MuiDrawer: {
        paper: {
          top: 78,
          bottom: 0,
          height: "unset",
          background: "#f6f5f5",
          "@media (max-width: 768px)": {
            top: 63
          }
        }
      },
      MuiButton: {
        textSizeSmall: {
          fontSize: 14
        }
      },
      MuiSnackbarContent: {
        message: {
          fontSize: 14,
          minWidth: 0,
          overflow: "hidden"
        },
        action: {
          flexShrink: 0
        }
      },
      MuiFormLabel: {
        asterisk: {
          color: "#767676"
        }
      },
      MuiFormControlLabel: {
        labelPlacementStart: {
          marginLeft: 0
        }
      },
      MuiSelect: {
        root: {
          marginTop: "-0.5px"
        }
      },
      MuiInput: {
        input: {
          "min-height": "22px"
        },
        underline: {
          "&:before, &:after": {
            "border-width": "1px !important"
          },
          "& div": {
            top: "calc(50% - 18px)"
          }
        }
      },
      MuiCircularProgress: {
        colorPrimary: {
          color: "#0095DB"
        }
      },
      MuiInputLabel: {
        root: {
          height: "30px",
          maxWidth: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        },
        shrink: {
          maxWidth: "130%"
        }
      },
      MuiDialog: {
        paper: {
          borderRadius: 15,
          padding: 7
        },
        paperFullScreen: {
          padding: 0
        },
        root: {
          zIndex: "5010 !important" as any
        }
      },
      MuiDialogTitle: {
        root: {
          paddingBottom: 7
        }
      },
      MuiBadge: {
        anchorOriginTopRightRectangle: {
          top: "8px",
          right: "8px"
        }
      },
      MuiPaper: {
        elevation1: {
          boxShadow:
            "0px 0px 1px 0px rgb(0 0 0 / 20%), 0px 0px 3px 1px rgb(0 0 0 / 14%), 0px 0px 2px 0px rgb(0 0 0 / 12%)",
          backgroundColor: "#fafafa"
        }
      }
    }
  },
  esES
);
