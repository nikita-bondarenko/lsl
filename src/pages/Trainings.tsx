import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout";
import {useGlobalContext} from "../context/context";
import {usePage} from "../hooks/usePage";

const Trainings = () => {


    const {
        setTitle,
        setDescription,
        setTrainingsPage
    } = useGlobalContext()

    const [page] = usePage('trenazhery')
    useEffect(() => {
        if (page) {
            setTitle(page.metaData?.metaZagolovok)
            setDescription(page.metaData?.metaOpisanie)
            setTrainingsPage(page)
        }
    }, [page])

    return (
        <Layout>
            trenazhery
        </Layout>
    );
};

export default Trainings;
