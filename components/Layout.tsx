import React, { ReactNode } from "react";
import Head from "next/head";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Link as MLink,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as Colors from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  screenName: {
    paddingRight: "8px",
  },
  appBar: {
    color: Colors.common.white,
  },
}));

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppBar className={classes.appBar} position="relative">
        <Toolbar>
          <Typography className={classes.title}>Gomiatsume</Typography>
          <Typography className={classes.screenName}>
            <MLink
              href="https://twitter.com/naari_"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              @naari_
            </MLink>
          </Typography>
          <Typography className={classes.screenName}>
            <MLink
              href="https://twitter.com/_naari_"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              @_naari_
            </MLink>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl">
        <Grid container alignItems="center" justify="center">
          <>{children}</>
        </Grid>
      </Container>
      <footer></footer>
    </div>
  );
};

export default Layout;
