import MobiledocController from 'MobiledocController'
import MobiledocEditor from 'MobiledocEditor'
import MobiledocButton from 'MobiledocButton'
import MobiledocToolbar from 'addons/MobiledocToolbar'
import compToCard from 'utils/compToCard'

function createMobiledoc (prefix = '') {
  const Ctrl = new MobiledocController()
  const Btn = MobiledocButton(Ctrl)
  return {
    [`${prefix}Ctrl`]: Ctrl,
    [`${prefix}Editor`]: MobiledocEditor(Ctrl),
    [`${prefix}Btn`]: Btn,
    [`${prefix}Toolbar`]: MobiledocToolbar(Ctrl, Btn)
  }
}

export {
  createMobiledoc,
  compToCard
}

export default createMobiledoc()
