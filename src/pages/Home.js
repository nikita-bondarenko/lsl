import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import Layout from "../components/layout/Layout";
import { useQuery } from "@apollo/client";
import { MAIN_PAGE } from "../gql/queries/getMainPage";
import { useGlobalContext } from "../context/context";
import HomeHero from "../components/pages/HomePage/HomeHero/HomeHero";
import { GET_TRAININGS } from "../gql/queries/getTrainings";
import { GET_BLOGS } from "../gql/queries/getBlogs";
import { GET_PUBLICATIONS } from "../gql/queries/getPublications";
import HomeTrainings from "../components/pages/HomePage/HomeTrainings/HomeTrainings";
import HomeSafety from "../components/pages/HomePage/HomeSafety/HomeSafety";
import Steps from "../components/common/Steps/Steps";
import Messenger from "../components/common/Messenger/Messenger";
import HomePublications from "../components/pages/HomePage/HomePublications/HomePublications";
import HomeValues from "../components/pages/HomePage/HomeValues/HomeValues";
import Blog from "../components/common/Blog/Blog";
import Feedbacks from "../components/common/Feedbacks/Feedbacks";
import HomeSupport from "../components/pages/HomePage/HomeSupport/HomeSupport";
import HomeAbout from "../components/pages/HomePage/HomeAbout/HomeAbout";
const Home = () => {
    const { data, loading } = useQuery(MAIN_PAGE, { fetchPolicy: 'no-cache' });
    const { data: trainingsData, loading: trainingsLoading } = useQuery(GET_TRAININGS, { fetchPolicy: 'no-cache' });
    const { data: blogData } = useQuery(GET_BLOGS, { fetchPolicy: 'no-cache' });
    const { data: publicationsData } = useQuery(GET_PUBLICATIONS, { fetchPolicy: 'no-cache' });
    const { setPageLoading, setMainPageData, setTitle, setDescription, setTrainings, setBlogs, setPublications, mainPageData } = useGlobalContext();
    useEffect(() => {
        if (data) {
            setMainPageData(data);
            const pageData = data;
            setTitle(pageData?.page?.metaData?.metaZagolovok);
            setDescription(pageData?.page?.metaData?.metaOpisanie);
        }
    }, [data]);
    useEffect(() => {
        if (trainingsData) {
            setTrainings(trainingsData);
        }
    }, [trainingsData]);
    useEffect(() => {
        if (blogData) {
            setBlogs(blogData);
        }
    }, [blogData]);
    useEffect(() => {
        if (publicationsData) {
            setPublications(publicationsData);
        }
    }, [publicationsData]);
    useEffect(() => {
        setPageLoading(loading || trainingsLoading);
    }, [loading, trainingsLoading]);
    return (_jsxs(Layout, { children: [_jsx(HomeHero, {}), _jsx(HomeTrainings, {}), _jsx(HomeSafety, {}), _jsx(Steps, {}), _jsx(Messenger, {}), _jsx(HomeAbout, {}), _jsx(HomePublications, {}), _jsx(HomeValues, {}), _jsx(Blog, { title: mainPageData?.page?.main?.mainBlogZagolovok, remark: mainPageData?.page?.main?.mainBlogRemarka, linkHref: mainPageData?.page?.main?.mainBlogAdresSsylki, linkText: mainPageData?.page?.main?.mainBlogTekstSsylki }), _jsx(Feedbacks, {}), _jsx(HomeSupport, {})] }));
};
export default Home;
