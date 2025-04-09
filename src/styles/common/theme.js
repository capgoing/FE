import colors from "./colors";

export const lightTheme = {
    global: {
        background: colors.mainYellow,
    },
    components: {
        innerHeaderContainer: {
            background: colors.white,
        },
        toggleBox: {
            background: colors.subYellow,
        },
        toggleButton: {
            background: colors.mainYellow,
            text: colors.white,
        },
        toggleLabel: {
            text: colors.mainYellow,
        },
        graphFlowContainer: {
            background: colors.white,
        }
    },
  };
  
  export const darkTheme = {
    global: {
        background: colors.white,
    },
    components: {
        innerHeaderContainer: {
            background: colors.gray5,
        },
        toggleBox: {
            background: colors.black,
        },
        toggleButton: {
            background: colors.gray,
            text: colors.white,
        },
        toggleLabel: {
            text: colors.white,
        },
        graphFlowContainer: {
            background: colors.gray5,
        }
    },
  };
  