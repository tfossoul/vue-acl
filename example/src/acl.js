import Vue from 'vue'
import { AclInstaller, AclCreate, AclRule } from '../../source'
import router from './router'

Vue.use(AclInstaller)

export default new AclCreate({
  initial: 'public',
  notfound: '/error',
  router,
  acceptLocalRules: true,
  globalRules: {
    isAdmin: new AclRule('admin'),
    isPublic: new AclRule('*')
  }
})
