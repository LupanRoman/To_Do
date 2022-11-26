import '../styles/globals.css';
import React from 'react';
import App from 'next/app';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || DefaultLayout;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

const DefaultLayout = ({ children }) => <>{children}</>;

export default MyApp;
