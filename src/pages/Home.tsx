import {useEffect} from 'react';
import Layout from "../components/layout/Layout";
import {useGlobalContext} from "../context/context";
import HomeHero from "../components/pages/HomePage/HomeHero/HomeHero";
import HomeTrainings from "../components/pages/HomePage/HomeTrainings/HomeTrainings";
import HomeSafety from "../components/pages/HomePage/HomeSafety/HomeSafety";
import Steps from "../components/common/Steps/Steps";
import Messenger from "../components/common/Messenger/Messenger";
import HomePublications from "../components/common/Publications/Publications";
import HomeValues from "../components/pages/HomePage/HomeValues/HomeValues";
import Blog from "../components/common/Blog/Blog";
import Feedbacks from "../components/common/Feedbacks/Feedbacks";
import HomeSupport from "../components/pages/HomePage/HomeSupport/HomeSupport";
import HomeAbout from "../components/pages/HomePage/HomeAbout/HomeAbout";
import {usePage} from "../hooks/usePage";
import {stack} from "../hooks/useClassName";
import Support from "../components/common/Support/Support";

const Home = () => {

    const {
        setTitle,
        setDescription,
        setMainPage,
        setIsNewContainer
    } = useGlobalContext()
    useEffect(() => {
        setIsNewContainer(false)
    }, []);

    const [page] = usePage('glavnaya')
    useEffect(() => {
        if (page) {
            setTitle(page.metaData?.metaZagolovok)
            setDescription(page.metaData?.metaOpisanie)
            setMainPage(page)
        }
    }, [page])

    return (
        <Layout>
            <HomeHero></HomeHero>
            <HomeTrainings></HomeTrainings>
            <HomeSafety></HomeSafety>
            <Steps></Steps>
            <Messenger></Messenger>
            <HomeAbout></HomeAbout>
            <HomePublications></HomePublications>
            <HomeValues></HomeValues>
            <Blog title={page?.main?.mainBlogZagolovok} remark={page?.main?.mainBlogRemarka}
                  linkHref={page?.main?.mainBlogAdresSsylki}
                  linkText={page?.main?.mainBlogTekstSsylki}></Blog>
            <Feedbacks></Feedbacks>
            <Support></Support>
        </Layout>
    );
};

export default Home;
