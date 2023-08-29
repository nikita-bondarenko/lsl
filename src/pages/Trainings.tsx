import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout";
import {useGlobalContext} from "../context/context";
import {usePage} from "../hooks/usePage";
import TrainingsHero from "../components/pages/TrainingsPage/TrainingsHero/TrainingsHero";
import TrainingsAdvantages from "../components/pages/TrainingsPage/TrainingsAdvantages/TrainingsAdvantages";
import TrainingsAbout from "../components/pages/TrainingsPage/TrainingsAbout/TrainingsAbout";
import TrainingsSelect from "../components/pages/TrainingsPage/TrainingsSelect/TrainingsSelect";
import TrainingsGift from "../components/pages/TrainingsPage/TrainingsGift/TrainingsGift";
import TrainingsDelivery from "../components/pages/TrainingsPage/TrainingsDelivery/TrainingsDelivery";
import Steps from "../components/common/Steps/Steps";
import TrainingsFeedbacks from "../components/pages/TrainingsPage/TrainingsFeedbacks/TrainingsFeedbacks";
import Online from "../components/common/Online/Online";

const Trainings = () => {


    const {
        setTitle,
        setDescription,
        setTrainingsPage,
        setIsNewContainer
    } = useGlobalContext()

    useEffect(() => {
        setIsNewContainer(true)
    }, []);

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
            <TrainingsHero></TrainingsHero>
            <TrainingsAdvantages></TrainingsAdvantages>
            <TrainingsSelect></TrainingsSelect>
            <TrainingsGift></TrainingsGift>
            <TrainingsDelivery></TrainingsDelivery>
            <Steps></Steps>
            <TrainingsFeedbacks></TrainingsFeedbacks>
            <Online></Online>
            <TrainingsAbout></TrainingsAbout>
        </Layout>
    );
};

export default Trainings;
