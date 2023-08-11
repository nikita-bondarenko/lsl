import React, {memo, ReactElement, ReactNode, useEffect, useState} from 'react';
import {Helmet} from "react-helmet";
import Header, {Navigation} from "./Header/Header";
import Cookies from "./Cookies/Cookies";
import Footer from "./Footer/Footer";
import {useGlobalContext} from "../../context/context";
import {useQuery} from "@apollo/client";
import Loading from "../loading/Loading";
import FixedLayer from "./FixedLayer/FixedLayer";
import Modal from "./Modal/Modal";
import NavModal from "./Header/Navigatioin/NavModal/NavModal";
import {init} from "@graphql-codegen/cli";

type LayoutProps = {
    children: ReactElement | ReactNode,
}

const Layout = memo(({children}: LayoutProps) => {
    const {
        title,
        description,
        isLoading,
        isNavModalOpen,
        setIsNavModalOpen,
        historyLength
    } = useGlobalContext()


    const onModalClose = (value: boolean) => {
        setIsNavModalOpen(false)
    }


    return (
        <>
            <Helmet>
                {title && <title>{title}</title>}
            </Helmet>

            {historyLength < 2 ?
                <>
                    <Loading></Loading>
                <div style={{display: isLoading ? 'none' : 'block'}} className={!isLoading ? 'animate-appear' : ''}>
                    <Header></Header>
                    <FixedLayer>
                        <Cookies></Cookies>
                        <Modal open={isNavModalOpen} setOpen={onModalClose}>
                            {isNavModalOpen && <Navigation></Navigation>}
                        </Modal>
                    </FixedLayer>
                    {children}
                    <Footer></Footer>
                </div>
                </>
                : <>
                    <Header></Header>
                    <FixedLayer>
                        <Modal open={isNavModalOpen} setOpen={onModalClose}>
                            {isNavModalOpen && <Navigation></Navigation>}
                        </Modal>
                    </FixedLayer>
                    {children}
                    <Footer></Footer>
                </>}

        </>
    );
});

export default Layout;
