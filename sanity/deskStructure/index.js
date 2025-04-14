import home from './home'
import settings from './settings'

// Hide document types that we already have a structure definition for
const hiddenDocTypes = (listItem) => !['sitesettings', 'home'].includes(listItem.getId())

export const structure = (S) =>
  S.list()
    .title('Single Pages')
    .items([settings(S), home(S), S.divider(), ...S.documentTypeListItems().filter(hiddenDocTypes)])
