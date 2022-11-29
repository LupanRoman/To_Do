import '../styles/globals.css';
import React from 'react';
import App from 'next/app';
import { ContextProvider } from '../context/StateContext';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || DefaultLayout;

    return (
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    );
  }
}

const DefaultLayout = ({ children }) => <>{children}</>;

export default MyApp;
