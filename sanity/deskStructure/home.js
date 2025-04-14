import {IoHomeOutline} from 'react-icons/io5'
export default (S) =>
  S.listItem()
    .title('Home Page')
    .child(S.document().id('home').schemaType('home').documentId('home'))
    .icon(IoHomeOutline)
