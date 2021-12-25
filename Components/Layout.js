import React from 'react';
import Head from 'next/head';
import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import useStyles from '../utils/styles';
import NextLink from 'next/link';
const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Pets World</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link style={{ textDecoration: 'none' }}>
              <Typography className={classes.brand}> PetsWorld</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link style={{ textDecoration: 'none' }}> Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link style={{ textDecoration: 'none' }}> LogIn</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography style={{ padding: '2rem', fontWeight: 'bold' }}>
          All Rights Reserved &reg; PetsWorld &copy;
        </Typography>
      </footer>
    </div>
  );
};

export default Layout;
