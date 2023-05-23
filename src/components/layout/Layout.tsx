import React, {ReactElement, ReactNode, useEffect} from 'react';
import {Helmet} from "react-helmet";
import Header, {Navigation} from "./Header/Header";
import Cookies from "./Cookies/Cookies";
import Footer from "./Footer/Footer";
import {useGlobalContext} from "../../context/context";
import {useQuery} from "@apollo/client";
import {GET_COMMON_SECTIONS} from "../../gql/queries/getCommonSections";
import {getMenu} from "../../gql/queries/getMenu";
import Loading from "../loading/Loading";
import FixedLayer from "./FixedLayer/FixedLayer";
import Modal from "./Modal/Modal";
import NavModal from "./Header/Navigatioin/NavModal/NavModal";

type LayoutProps = {
    children: ReactElement | ReactNode,
}

const Layout = ({children}: LayoutProps) => {

    const {setCommonSections, setMenu, title, description, isLoading, setIsLoading, isNavModalOpen, setIsNavModalOpen} = useGlobalContext()

    const {data: commonSections} = useQuery(GET_COMMON_SECTIONS, {fetchPolicy: 'no-cache'})
    const {data: menu} = useQuery(getMenu, {fetchPolicy: 'no-cache'})


    useEffect(() => {
        if (commonSections) {
            commonSections && setCommonSections(commonSections)
        }
    }, [commonSections])
    useEffect(() => {
        if (menu) {
            menu && setMenu(menu)
        }
    }, [menu])

    const onModalClose = (value: boolean) => {
        setIsNavModalOpen(false)
    }


    return (
        <>
            <Helmet>
                {title && <title>{title}</title>}
                {description && <meta name={'description'} content={description}/>}
            </Helmet>
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
    );
};

export default Layout;
