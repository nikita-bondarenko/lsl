import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout";
import Messenger from "../components/common/Messenger/Messenger";
import {useGlobalContext} from "../context/context";
import LeaveContacts from "../components/common/LeaveContacts/LeaveContacts";
import {usePage} from "../hooks/usePage";

const Contacts = () => {


    const {
        setTitle,
        setDescription,
        setContactPage,
        setIsNewContainer
    } = useGlobalContext()

    useEffect(() => {
        setIsNewContainer(false)
    }, []);

    const [page] = usePage('kontakty')
    useEffect(() => {
        if (page) {
            setTitle(page.metaData?.metaZagolovok)
            setDescription(page.metaData?.metaOpisanie)
            setContactPage(page)
        }
    }, [page])

    return (
      <Layout>
          <LeaveContacts title={page?.contacts?.contactsPageZagolovok} buttonText={page?.contacts?.contactsPageTekstKnopki}></LeaveContacts>
          <Messenger text={page?.contacts?.contactsPagePodzagolovok}></Messenger>
      </Layout>
    );
};

export default Contacts;
