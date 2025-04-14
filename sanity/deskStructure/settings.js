import {CiSettings} from 'react-icons/ci'
export default (S) =>
  S.listItem()
    .title('Site Settings')
    .child(S.document().id('sitesettings').schemaType('sitesettings').documentId('sitesettings'))
    .icon(CiSettings)
