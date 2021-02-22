import React from "react";
import PropTypes from "prop-types";
import Head from 'next/head';
import 'antd/dist/antd.css'

const Tweety = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charset="utf-8"/>
            </Head>
            <Component />
        </>
    );
};

Tweety.propTypes = {
    Component: PropTypes.elementType.isRequired
};

export default Tweety;