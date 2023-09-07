import React, {useEffect} from 'react';
import {useGlobalContext} from "../context/context";
import {usePage} from "../hooks/usePage";
import Layout from "../components/layout/Layout";
import Messenger from "../components/common/Messenger/Messenger";
import Publications from "../components/common/Publications/Publications";
import FeedbacksSimple from "../components/common/Feedbacks/FeedbacksSimple/FeedbacksSimple";
import FeedbacksSocial from "../components/common/Feedbacks/FeedbacksSocial/FeedbacksSocial";


const Feedbacks = () => {

    const {
        setTitle,
        setDescription,
        setIsNewContainer
    } = useGlobalContext()
    useEffect(() => {
        setIsNewContainer(false)
    }, []);

    const [page] = usePage('otzyvy')
    useEffect(() => {
        if (page) {
            setTitle(page.metaData?.metaZagolovok)
            setDescription(page.metaData?.metaOpisanie)
        }
    }, [page])

    return (
        <Layout>
            <h1 className="hidden">Отзывы</h1>
            <div className="mt-[91px]  mt-[70px]
xl:mt-[52px] lg:mt-[50px] md:mt-[37px] sm:mt-[7px]">
                <FeedbacksSimple className={'section-indent-new'}></FeedbacksSimple>
            </div>

            <FeedbacksSocial></FeedbacksSocial>
            <Publications className=" mb-[120px] xl:mb-[75px] lg:mb-[66px] md:mb-[43px] sm:mb-[40px]"></Publications>
            <Messenger className="mb-[130px]  mb-[121px] xl:mb-[18px] lg:mb-[10px] md:mb-[-12px]"></Messenger>
        </Layout>
    );
};

export default Feedbacks;
