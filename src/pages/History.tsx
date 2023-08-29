import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout";
import {useGlobalContext} from "../context/context";
import {usePage} from "../hooks/usePage";
import HistoryHero from "../components/pages/HistoryPage/HistoryHero/HistoryHero";
import HistoryWe from "../components/pages/HistoryPage/HistoryWe/HistoryWe";
import HistoryProjects from "../components/pages/HistoryPage/HistoryProjects/HistoryProjects";
import HistoryFind from "../components/pages/HistoryPage/HistoryFind/HistoryFind";
import HistoryHistory from "../components/pages/HistoryPage/HistoryHistory/HistoryHistory";
import HistorySended from "../components/pages/HistoryPage/HistorySended/HistorySended";
import HistorySupport from "../components/pages/HistoryPage/HistorySupport/HistorySupport";

const History = () => {


    const {
        setTitle,
        setDescription,
        setHistoryPage,
        setIsNewContainer
    } = useGlobalContext()

    useEffect(() => {
        setIsNewContainer(true)
    }, []);

    const [page] = usePage('istoriya')
    useEffect(() => {
        if (page) {
            setTitle(page.metaData?.metaZagolovok)
            setDescription(page.metaData?.metaOpisanie)
            setHistoryPage(page)
        }
    }, [page])

    return (
        <Layout>
            <HistoryHero></HistoryHero>
            <HistoryWe></HistoryWe>
            <HistoryProjects></HistoryProjects>
            {/*<HistoryFind></HistoryFind>*/}
            {/*<HistoryHistory></HistoryHistory>*/}
            {/*<HistorySended></HistorySended>*/}
            {/*<HistorySupport></HistorySupport>*/}
        </Layout>
    );
};

export default History;
