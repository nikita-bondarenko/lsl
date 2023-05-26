import {gql} from "@apollo/client";

export const CONTACTS_PAGE = gql(`
query ContactsPage {
  page(id: "cG9zdDo0NzI=") {
    contacts {
      contactsPageTekstKnopki
      contactsPageZagolovok
      contactsPagePodzagolovok
    }
    metaData {
      metaOpisanie
      metaZagolovok
    }
  }
}
`)
